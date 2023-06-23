import { BrowserRouter, Outlet, Route, Routes, createBrowserRouter } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";
import Produto from "./components/Produto/produto";
import ProdutoEdit from "./components/ProdutoEdit/produtoEdit";
import Cadastro from "./components/Cadastro/cadastro";
import Home from "./components/pages/home";
import Navbar from "./components/Navbar/Navbar";
/* import Cadastro from "./components/Cadastro/cadastro";
 */


/* const Login = () => <p>Login</p>
const Cadastro = () => <p>Cadastro</p>
const DashBoard = () => <p>DashBoard</p>

const routes = createBrowserRouter([
    {path: '/', element: <Login />},
    {path: 'login', element: <Login />},
    {path: 'cadastro', element: <DashBoardOutlet />},
    {path: 'dashboard', children: [
        {index: true, element: <DashBoard />}
        {path: 'armazem', element: <Login />},
        {path: 'estoque', element: <Login />},
    ]},
])

const DashBoardOutlet = ( => {
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}) */

const AppRoutes = () => {

/*     const [selectedButton, setSelectedButton] = useState("dashboard");
 */

    return (
        <BrowserRouter>
                <div className="navbar"><Navbar /></div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/estoque" element={<Estoque />}/>
                <Route path="/produto" element={<Produto/>} />
                <Route path="/produto/:id/edit" element={<ProdutoEdit />} />
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;