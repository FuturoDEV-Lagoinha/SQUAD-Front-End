import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";
import Produto from "./components/Produto/produto";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/estoque" element={<Estoque />}/>
                <Route path="/produto" element={<Produto/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;