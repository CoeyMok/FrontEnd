import React, { useState, useEffect } from 'react';
import { DataGrid,useGridApiRef } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Homepage() {
    const navigate = useNavigate();
    const [rows,setRows] = useState([]);
    const [isLogined,setIsLogined] = useState(false);

    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'name',
        headerName: 'name',
        width: 160,
        editable: isLogined,
      },
      {
        field: 'age',
        headerName: 'age',
        type: 'number',
        width: 150,
        editable: isLogined,
      },
      {
        field: 'breeds',
        headerName: 'breeds',
        width: 150,
        editable: isLogined,
      },
      {
        field: 'height',
        headerName: 'height',
        type: 'number',
        width: 110,
        editable: isLogined,
      },
      {
          field: 'weight',
          headerName: 'weight',
          type: 'number',
          width: 110,
          editable: isLogined,
      },
    ];

    const fetchData = () => {
        axios.get('http://localhost:3001/dogs').then(
            res => {
                setRows(res.data.result);
            }
        )
    }

    const handleCellEditCommit = React.useCallback(
      ({ id, field, value }) => {
        axios.put(`http://localhost:3001/dogs/${id}`,{[field]:value}, {
          headers: {
            'token': localStorage.getItem('token')
          }
        })
        .then(res => {
          if(res.status === 200){
            fetchData();
          }
        })
        .catch(err => alert(err));
      },
      [rows],
    );

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
                disableSelectionOnClick
                onCellEditCommit={handleCellEditCommit}
            />
            </div>
        </React.Fragment>
       
    )
}

export default Homepage;