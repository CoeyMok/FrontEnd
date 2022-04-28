import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/home';
import App from '../App';

function indexRoute() {
  return (
    <Routes>
         <Route path="/" element={<App/>} />
         <Route path="/login" element={<Home/>}/>
    </Routes>
  )
}

  export default indexRoute;