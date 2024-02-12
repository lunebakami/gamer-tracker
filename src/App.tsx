import type { Component } from "solid-js";
import { Route, RouteSectionProps, Router } from "@solidjs/router";

import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

const RootApp: Component<RouteSectionProps> = ({ children }) => (
  <div class="bg-black text-white flex flex-col w-full h-screen">
    <nav>
      <a href="/">Login</a>
      <a href="/signup">SignUp</a>
      <a href="/home">Home</a>
    </nav>
    <div class="flex">
      {children}
    </div>
  </div>
);

const App: Component = () => {
  return (
    <Router root={RootApp}>
      <Route path="/" component={LoginPage} />
      <Route path="/home" component={MainPage} />
      <Route path="/signup" component={SignUpPage} />
    </Router>
  );
};

export default App;
