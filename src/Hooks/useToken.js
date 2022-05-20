import axios from "axios"
import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            axios.put(`https://doctor-portal-o.herokuapp.com/user/${email}`, { email: email })
                .then((response) => {
                    const data = response.data;
                    if (data) {
                        localStorage.setItem('accessToken', data.token);
                        setToken(data.token)
                    }
                })
        }
    }, [user])
    return [token, setToken];
}
export default useToken;