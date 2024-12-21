import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
    const {id}=useParams();
    const [student, setStudent] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{
            setStudent(res.data[0]);
            // console.log(student)
            })
        .catch(err=>console.log(err))
    },[])
    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <div className="p-2">
            <h2>Student Detail</h2>
        <h2>{student.id}</h2>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>
        </div>
            <Link to={'/'} className="btn btn-primary " >Back</Link>
            <Link to={`/edit/${student.id}`} className="btn btn-primary " >Edit</Link>
        </div>
    </div>
  )
};

export default Read;
