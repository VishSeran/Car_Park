import express from 'express';
import { Car } from '../models/carModel.js';

const router = express.Router();

//Route for save a new car
router.post('/', async(request,response) => {
    try{
        if(
            !request.body.carOwner ||
            !request.body.licensePlate ||
            !request.body.carModel ||
            !request.body.carColor 
        ){
            return response.status(400).send({
                message:'Send all required fields:carOwner,licensePlate,carModel,carColor',
            });
        }
        const newCar={
            carOwner:request.body.carOwner,
            licensePlate:request.body.licensePlate,
            carModel:request.body.carModel,
            carColor:request.body.carColor,
        };
        const car = await Car.create(newCar);

        return response.status(201).send(car);
    }   catch (error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for get All cars from database
router.get('/',async(request,response) => {
    try{
        const cars = await Car.find({});

        return response.status(200).json({
            count:cars.length,
            data:cars
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for get One cars from database by id
router.get('/:id',async(request,response) => {
    try{
        const {id}=request.params;

        const car = await Car.findById(id);

        return response.status(200).json(car);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for update a Car
router.put('/:id',async(request,response) => {
    try{
        if(
            !request.body.carOwner ||
            !request.body.licensePlate ||
            !request.body.carModel ||
            !request.body.carColor 
        ){
            return response.status(400).send({
                message:'Send all required fields:carOwner,licensePlate,carModel,carColor',
            });
        }

        const {id}=request.params;

        const result = await Car.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message:'Car not found'});
        }
        return response.status(200).json({message:'Car updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for Delete a car
router.delete('/:id',async(request,response) =>{
    try{
        const {id}=request.params;

        const result = await Car.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'Car not found'});
        }
        return response.status(200).json({message:'Car deleted successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

export default router;