import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'name',
      width: 160,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'breeds',
      headerName: 'breeds',
      width: 150,
      editable: true,
    },
    {
      field: 'height',
      headerName: 'height',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'weight',
        headerName: 'weight',
        type: 'number',
        width: 110,
        editable: true,
    },
  ];


  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];

function Homepage() {
    const navigate = useNavigate();
    const [rows,setRows] = useState([]);
    const [isLogined,setIsLogined] = useState(false);

    const fetchData = () => {
        axios.get('http://localhost:3001/dogs').then(
            res => {
                setRows(res.data.result);
            }
        )
    }

    const login  =  () => {
        navigate("/login");
    }

    const logout = () => {
        localStorage.removeItem('isLogined');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
        setIsLogined(false);
    }
    
    useEffect(() => {

        setIsLogined(localStorage.getItem('isLogined')==='Y'? true: false);
        fetchData();
      },[]);
        
   

    return (
        <React.Fragment>
            <div>
                {isLogined ? <div> Hello, {localStorage.getItem('username')}  <button onClick={logout}>Logout</button> </div> : <button onClick={login}>Login</button>} 
            </div>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </React.Fragment>
       
    )
}

export default Homepage;