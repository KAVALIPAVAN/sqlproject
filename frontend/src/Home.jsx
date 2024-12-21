
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        // console.log(res.data);
        setData(res.data); 
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleDelete=(id)=>{
    axios.delete("http://localhost:8081/delete/"+id)
    .then((res) => {
      location.reload(); 
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <h1>Student List</h1>
      <div className="d-flex justify-content-end">
        <Link to="/create" className="btn btn-success">Create + </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {data.map((student, index) => (
            <tr key={index}>
              <td>{student?.id}</td>
              <td>{student?.name}</td>
              <td>{student?.email}</td>
              <td>
                <Link to={`/read/${student.id}`} className="btn btn-sm btn-info">Read</Link>
                <Link to={`/edit/${student.id}`} className="btn btn-sm btn-info mx-2">Edit</Link>
                <button onClick={()=>{handleDelete(student.id)}} className="btn btn-sm btn-primary ">Delete</button>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;
