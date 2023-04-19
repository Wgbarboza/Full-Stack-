import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Bem-vindo à minha aplicação!</h1>
      <p>Clique no link abaixo para ir para a página Sobre:</p>
      <Link to="/about">Sobre</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Sobre a minha aplicação</h1>
      <p>Esta é uma aplicação simples criada em React para demonstrar como usar rotas e links.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;