import { Router } from "./router/Router";
import "../src/App.css"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
      <div className="App">
        <Router />
      </div>

  );
}

export default App;
