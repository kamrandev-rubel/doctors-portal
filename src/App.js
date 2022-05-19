import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivetRoute from './Pages/Login/PrivetRoute';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <div data-theme={`${theme ? 'dark' : 'light'}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={
          <PrivetRoute>
            <Appointment />
          </PrivetRoute>
        } />
        <Route path='/dashboard' element={
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        } >
          <Route index element={<MyAppointment />} />
          <Route path='/dashboard/myReview' element={<MyReview />} />
          <Route path='/dashboard/myHistory' element={<MyHistory />} />
          <Route path='/dashboard/allUsers' element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          } />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
