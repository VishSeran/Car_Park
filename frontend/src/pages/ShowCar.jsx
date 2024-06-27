
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowCar = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

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
      <BackButton destination="/home" /> 
      <h1 className='text-3xl my-4 text-center mx-auto'>Show Car</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{car._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Car Owner</span>
            <span>{car.carOwner}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>License Plate</span>
            <span>{car.licensePlate}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Car Model</span>
            <span>{car.carModel}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Car Color</span>
            <span>{car.carColor}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(car.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(car.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCar;