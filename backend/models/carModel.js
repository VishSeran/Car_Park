import mongoose from "mongoose";

const carSchema = mongoose.Schema(
    {
        carOwner: {
            type: String,
            required: true,
        },

        licensePlate: {
            type: String,
            required: true,
        },

        carModel: {
            type: String,
            required:true,
        },

        carColor: {
            type: String,
            required: true,
        },
    },
        {
          timestamps: true,
        }
);
export const Car=mongoose.model('Car',carSchema);