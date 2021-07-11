import React from 'react';
import './App.css';
import Routes from "./routes/routes";
import Header from "./components/header/Header";
import Rodape from "./components/rodape/Rodape";
import { AuthProvider  } from './services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes />
        <Rodape></Rodape>
      </AuthProvider >
    </div>
  );
}

export default App;
