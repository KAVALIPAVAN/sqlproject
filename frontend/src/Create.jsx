import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [values, setValues] = useState({
        name:'',
        email:''
    });
    const navigate =useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post('http://localhost:8081/student',values)
        .then(res=>{
            // console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="enter name" className="form-control" onChange={e=>setValues({...values,name:e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter email" onChange={e=>setValues({...values,email:e.target.value})} className="form-control" />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
};

export default Create;
