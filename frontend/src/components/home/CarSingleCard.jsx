import { Link } from "react-router-dom"
import { BiCar } from 'react-icons/bi'; // Correct the icon import
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from "react";
import CarModel from "./CarModel";

const CarSingleCard = ({car}) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div 
    key={car._id}
    className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl' style={{backgroundColor:'#EAEAE0'}}>
    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
      {car.licensePlate}
    </h2>
    <h4 className='my-2 text-gray-500'>{car._id}</h4>
    <div className='flex justify-start items-center gap-x-2'>
      <BiCar className='text-red-300 text-2xl'/>
      <h2 className='my-1'>{car.carModel}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
      <BiUserCircle className='text-red-300 text-2xl'/>
      <h2 className='my-1'>{car.carOwner}</h2>
    </div>
    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
      <BiShow
      className='text-3xl text-blue-800 hover:text-black cursor-pointer'
      onClick={() => setShowModel(true)}
      />
      <Link to={`/cars/details/${car._id}`}>
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
      </Link>
      <Link to={`/cars/edit/${car._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
      </Link>
      <Link to={`/cars/delete/${car._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
      </Link>
    </div>
    {
      showModel && (
        <CarModel car={car} onClose={() => setShowModel(false)}/>
    )
    }
  </div>
  )
}

export default CarSingleCard