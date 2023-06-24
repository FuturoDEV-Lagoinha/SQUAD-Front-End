import './App.css';
import { EstoqueProvider } from './components/contexts/estoqueContext';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <EstoqueProvider>
        <AppRoutes />
      </EstoqueProvider>
    </div>
  );
}

export default App;
