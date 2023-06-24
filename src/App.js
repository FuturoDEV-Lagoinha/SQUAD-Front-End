import './App.css';
import { EstoqueProvider } from './components/contexts/estoqueContext';
import AppRoutes from './routes';
import { ProdutoProvider } from './components/contexts/ProdutoContext';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <EstoqueProvider>
        <AppRoutes />
      </EstoqueProvider>
=======

      <ProdutoProvider>
        <AppRoutes />
      </ProdutoProvider>

>>>>>>> refs/remotes/origin/main
    </div>
  );
}

export default App;


//<Outlet />