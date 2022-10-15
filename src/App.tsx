import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import TodoProvider from './Providers/TodoContext'
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
