import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";
import Produto from "./components/Produto/produto";
import ProdutoEdit from "./components/ProdutoEdit/produtoEdit";
import Cadastro from "./components/Cadastro/cadastro";
import Home from "./components/pages/home";
import Navbar from "./components/Navbar/Navbar";
import EstoqueEdit from "./components/Estoque/estoqueEdit";

const ConNavBar = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

const AppRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/home" element={<ConNavBar />} >
                    <Route index element={<Home/>}/>
                </Route>
                <Route path="/estoque" element={<ConNavBar />}>
                    <Route index element={<Estoque/>}/>
                    <Route path=":id_estoque/edit" element={<EstoqueEdit />}/>
                </Route>
                <Route path="/produto" element={<ConNavBar/>} >
                    <Route index element={<Produto/>}/>
                    <Route path=":id/edit" element={<ProdutoEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;