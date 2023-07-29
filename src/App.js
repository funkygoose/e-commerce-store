import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState, useEffect } from "react";
function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  } 

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo cart={cart} books={books} addToCart={addToCart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
