import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [logined, setLogined] = useState(localStorage.getItem('isLogined'));
    
    const goToLogin = () => {
        navigate('/login')
    }
    
    const logout = () => {
        localStorage.removeItem('isLogined');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
        setLogined('N');
        navigate("/");
    }

    return(
        <div>
        {
            logined == 'Y' 
            ? <p>hello , {localStorage.getItem('username')} <Button onClick={logout}>logout</Button></p>
            : <Button onClick={goToLogin}>login</Button>

        }
        </div>
    );
}

export default Home;