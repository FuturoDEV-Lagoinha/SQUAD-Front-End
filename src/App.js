import './App.css';
import AppRoutes from './routes';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ProdutoProvider } from './components/contexts/ProdutoContext';

function App() {
  return (
    <div className="App">
      <ProdutoProvider>

        <AppRoutes />
      </ProdutoProvider>

    </div>
  );
}

export default App;


//<Outlet />