import React, {useEffect, useState} from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const UpdateFood = () => {

    let {id} = useParams();
    const[Existing,setExisting] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        (async ()=>{
            await readExistingData(id)

        })()
    }, []);

    const readExistingData = async (id)=>{

        let res = await
            axios.get(`http://localhost:3080/api/ReadSingleApi/${id}`);

        setExisting(res.data['data'][0])

    }

    const updateFoodData = async (e)=>{

        e.preventDefault();

        let formData = new FormData(e.target);
        let name = formData.get("name");
        let code = formData.get("code");
        let image = formData.get("image");
        let category = formData.get("category");
        let quantity = formData.get("quantity");
        let price = formData.get("price");


        await axios.post(`http://localhost:3080/api/Update/${id}`,{
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
            <p className="mt-3 ms-3 fw-semibold">Update Food Item</p>
            <div className="container mt-3">
                <form onSubmit={updateFoodData}>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Food Name</label>
                            <input
                                defaultValue={Existing !== null ? (Existing["name"]):("")}
                                className="form-control form-control-sm"
                                   name="name" placeholder="name" type="text"/>
                        </div>

                        <div className="col-md-4">
                            <label>Food Code</label>
                            <input defaultValue={Existing !== null ? (Existing["code"]):("")}
                                className="form-control form-control-sm"
                                   name="code" placeholder="code" type="text"/>
                        </div>

                        <div className="col-md-4">
                            <label>Food Image</label>
                            <input defaultValue={Existing !== null ? (Existing["image"]):("")}
                                className="form-control form-control-sm"
                                   name="image" placeholder="image" type="text"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Food Category</label>
                            <input defaultValue={Existing !== null ? (Existing["category"]):("")}
                                className="form-control form-control-sm"
                                   name="category" placeholder="category" type="text"/>
                        </div>

                        <div className="col-md-4">
                            <label>QTY</label>
                            <input defaultValue={Existing !== null ? (Existing["quantity"]):("")}
                                className="form-control form-control-sm"
                                   name="quantity" placeholder="quantity" type="text"/>
                        </div>

                        <div className="col-md-4">
                            <label>Price</label>
                            <input defaultValue={Existing !== null ? (Existing["price"]):("")}
                                className="form-control form-control-sm"
                                   name="price" placeholder="price" type="text"/>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-lg btn-primary">Update</button>
                </form>
            </div>
        </MasterLayout>
    );
};

export default UpdateFood;