import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const CreateFood = () => {

    let navigate = useNavigate();

    const createFoodData = async (e)=>{

        e.preventDefault();

        let formData = new FormData(e.target);
        let name = formData.get("name");
        let code = formData.get("code");
        let image = formData.get("image");
        let category = formData.get("category");
        let quantity = formData.get("quantity");
        let price = formData.get("price");


        await axios.post(`http://localhost:3080/api/Create`,{
            name:name,
            code:code,
            image:image,
            category:category,
            quantity:parseFloat(quantity),
            price:parseFloat(price),
        })

        navigate("/")
    }
    return (
        <MasterLayout>
            <p className="mt-3 ms-3 fw-semibold">Create Food Item</p>
            <div className="container mt-3">
                <form onSubmit={createFoodData}>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Food Name</label>
                            <input className="form-control form-control-sm"
                                   name="name" placeholder="name" type="text" required/>
                        </div>

                        <div className="col-md-4">
                            <label>Food Code</label>
                            <input className="form-control form-control-sm"
                                   name="code" placeholder="code" type="text" required/>
                        </div>

                        <div className="col-md-4">
                            <label>Food Image</label>
                            <input className="form-control form-control-sm"
                                   name="image" placeholder="image" type="text" required/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Food Category</label>
                            <input className="form-control form-control-sm"
                                   name="category" placeholder="category" type="text" required/>
                        </div>

                        <div className="col-md-4">
                            <label>QTY</label>
                            <input className="form-control form-control-sm"
                                   name="quantity" placeholder="quantity" type="text" required/>
                        </div>

                        <div className="col-md-4">
                            <label>Price</label>
                            <input className="form-control form-control-sm"
                                   name="price" placeholder="price" type="text" required/>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-lg btn-primary">Submit</button>
                </form>
            </div>
        </MasterLayout>
    );
};

export default CreateFood;