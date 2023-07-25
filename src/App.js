import Footer from "./components/Footer";

import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
function App() {
  return (
    <Router>
      <div className="App">
        <Route />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
