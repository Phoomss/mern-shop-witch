import useModel from "../models/useModel.js";

export const registerController = (req, res) =>{
    try {
        const {name,email,password,phone,address} = req.body
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Register'
        })
    }
};