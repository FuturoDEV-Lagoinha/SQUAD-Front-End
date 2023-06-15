import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/estoque" element={<Estoque />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;