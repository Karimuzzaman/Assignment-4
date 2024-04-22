
const FoodModel = require("../model/FoodModel")

exports.Create = async (req,res)=>{
    try{

        let reqBody = req.body;
        await FoodModel.create(reqBody);
        return res.status(200).json({status:"success",message:"Request Completed",data:reqBody})
    }
    catch (e){
        return res.status(200).json({status:"failed",message: e.toString()})
    }
}

exports.Read = async (req,res)=>{
    try{
        let data = await FoodModel.find();
        return res.status(200).json({status:"success",message:"Request Completed",data:data})
    }
    catch (e){
        return res.status(200).json({status:"failed",message: e.toString()})
    }
}

exports.Update = async (req,res)=>{
    try{

        let {id} = req.params;
        let reqBody = req.body;
        await FoodModel.updateOne({_id:id},reqBody)

        return res.status(200).json({status:"success",message:"Request Completed"})
    }
    catch (e){
        return res.status(200).json({status:"failed",message: e.toString()})
    }
}

exports.Delete = async (req,res)=>{
    try{

        let {id} = req.params;
        await FoodModel.deleteOne({_id:id})
        return res.status(200).json({status:"success",message:"Request Completed"})
    }
    catch (e){
        return res.status(200).json({status:"failed",message: e.toString()})
    }
}

exports.ReadSingleApi = async (req,res)=>{
    try{
        let {id} = req.params;
        let data = await FoodModel.find({_id:id})
        return res.status(200).json({status:"success",message:"Request Completed",data:data})
    }
    catch (e){
        return res.status(200).json({status:"failed",message: e.toString()})
    }
}