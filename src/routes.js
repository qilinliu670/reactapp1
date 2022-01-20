import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar'
import Add from './add'
import Display from './display'

function MyRoutes(){
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <br/>
            <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/display" element={<Display />} />
            </Routes>
            </BrowserRouter>
                
        </div>
    )
}

export default MyRoutes