import { Link } from "react-router-dom"
import { BiCar } from 'react-icons/bi'; // Correct the icon import
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import CarSingleCard from "./CarSingleCard";

const CarsCard = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return <div>No cars available.</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((item) => (
        <CarSingleCard key={item._id} car={item} />
      
      ))}
    </div>
  )
}

export default CarsCard;
