import React, {useEffect, useState} from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import {Link} from "react-router-dom";

const AllFoodPage = () => {
    const[Data,setData] = useState([]);
    useEffect(() => {
        (async ()=>{
            await readData()
        })()
    }, []);

    const readData = async ()=>{

        let res = await axios.get(`http://localhost:3080/api/Read`);
        setData(res.data['data'])

    }

    const deleteData = async (id)=>{
        await axios.get(`http://localhost:3080/api/Delete/${id}`)
        await readData()
    }
    return (
        <MasterLayout>
            <p className="mt-3 ms-3 fw-semibold">All Food List</p>
            <div>
                {
                    Data === null ? (<Loader/>):
                        (<div className="container mt-3">
                            <div className="row">
                                {
                                    Data.map((item,i)=>{
                                        return (
                                            <div key={i} className="col-lg-3 p-1">
                                                <div className="card p-3">
                                                    <img className="w-100 card-img-height position-relative"
                                                         alt="" src={item['image']}/>
                                                    <h4>{item['name']}</h4>
                                                    <p className="text-white text-center border rounded w-50 card-price-color">
                                                        Taka:{item['price']}.00</p>
                                                    <p>Category: {item['category']}</p>
                                                    <p>Quantity: {item['quantity']}</p>
                                                    <div>
                                                        <Link className="btn btn-sm btn-outline-success me-3" to={`/update/${item['_id']}`}>Edit</Link>
                                                        <button onClick={()=>deleteData(item['_id'])} className="btn btn-outline-danger btn-sm">Delete</button>
                                                    </div>


                                                </div>


                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>)
                }
            </div>
        </MasterLayout>
    );
};

export default AllFoodPage;