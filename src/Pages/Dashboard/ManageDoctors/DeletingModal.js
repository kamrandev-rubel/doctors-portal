import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { firstName, lastName, email } = deletingDoctor;
    const handleDeleteDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Doctor: ${firstName} ${lastName} is Deleted`)
                refetch()
                setDeletingDoctor(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">{`Are you sure you want to delete Doctor: ${firstName} ${lastName}`}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="text-center">
                        <label htmlFor="delete-doctor-modal" className="btn btn-sm mr-3">Cancel</label>
                        <input type='button' value='Confirm' id='delete' onClick={() => handleDeleteDoctor(email)} className="btn btn-sm bg-error hover:bg-red-500 border-0 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingModal;