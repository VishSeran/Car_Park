
import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteCar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCar = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/cars/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Car Deleted successfully', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  // Set background image for the whole page
  useEffect(() => {
    document.body.style.backgroundImage = `url('https://img.freepik.com/premium-photo/blur-underground-cars-parking-garage-with-light-exit-way-use-as-background_1962-1063.jpg?w=1060')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Cleanup function to reset the background image
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  return (
    <div className='p-4'>
      <BackButton destination='/home' />
      <h1 className='text-3xl my-4 text-center mx-auto'>Delete Car</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this car?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteCar}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteCar;