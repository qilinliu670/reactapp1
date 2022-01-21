import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar'
import Foods from './foods'
import FoodDetails from './foodDetails'

function MyRoutes(){
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <br/>
            <Routes>
                <Route path="/" element={<Foods />} />
                <Route path="/details/:id" element={<FoodDetails />} />
            </Routes>
            </BrowserRouter>
                
        </div>
    )
}

export default MyRoutes