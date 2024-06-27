
import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditCar = () => {
  const [carOwner, setCarOwner] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cars/${id}`)
      .then((response) => {
        setCarOwner(response.data.carOwner);
        setLicensePlate(response.data.licensePlate);
        setCarModel(response.data.carModel);
        setCarColor(response.data.carColor);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Added dependency array

  const handleEditCar = () => {
    const data = {
      carOwner,
      licensePlate,
      carModel,
      carColor,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/cars/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Car Edited successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4 text-center mx-auto'>Edit Car</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Car Owner</label>
          <input
            type='text'
            value={carOwner}
            onChange={(e) => setCarOwner(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>License Plate</label>
          <input
            type='text'
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Car Model</label>
          <input
            type='text'
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Car Color</label>
          <input
            type='text'
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditCar}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCar;