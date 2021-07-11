import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/login/Login"
import Home from "../components/home/Home"
import { useAuth } from "../services/auth"
import { DetalhesEstabelecimento } from "../components/estabelecimento/DetalhesEstabelecimento";

export default function Routes() {
  const { signed } = useAuth();
  
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {signed && (
      <Route exact path="/home">
        <Home />
      </Route>
      )}
      {signed && (
      <Route exact path="/estabelecimento/detalhes">
        <DetalhesEstabelecimento />
      </Route>
      )}
    </Switch>
  );
}