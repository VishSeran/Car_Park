
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import CarsTable from '../components/home/CarsTable';
import CarsCard from '../components/home/CarsCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/cars')
      .then((response) => {
        console.log('API Response:', response.data);
        setCars(response.data.data); // Adjust this path if necessary based on the logged response
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

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
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 text-sky-900 text-center mx-auto'>CAR LIST</h1>
        <Link to='/cars/create'>
          <MdOutlineAddBox className='text-red-600 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <CarsTable cars={cars} />
      ) : (
        <CarsCard cars={cars} />
      )}
    </div>
  );
};

export default Home;