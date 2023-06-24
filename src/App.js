import './App.css';
import AppRoutes from './routes';
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