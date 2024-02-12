import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Employee from "./components/Employee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LocationStay from "./components/LocationStay";
import OrderHistory from "./components/OrderHistory";
import Shop from "./components/Shop";
import SubCategory from "./components/SubCategory";
import ViewAll from "./components/ViewAllPage/ViewAll";
import Payment from "./components/Payment";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState("");
  const [historyItems, setHistoryItems] = useState("");

  const getCartQuantity = (quantity) => {
    setCartQuantity(quantity);
  };

  const getHistoryItems = (items) => {
    setHistoryItems(items);
  };

  return (
    <BrowserRouter>
      {window.location.pathname !== "/employee" && (
        <Header getCartQuantity={cartQuantity} />
      )}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/location-stay" element={<LocationStay />}></Route>
        <Route exact path="/view-all" element={<ViewAll />}></Route>
        <Route exact path="/sub-category" element={<SubCategory />}></Route>
        <Route
          exact
          path="/shopping-cart"
          element={
            <Cart
              sendCartQuantity={getCartQuantity}
              getHistoryItems={getHistoryItems}
            />
          }
        ></Route>
        <Route
          exact
          path="/payment"
          element={<Payment purchasedItems={historyItems} />}
        ></Route>
        <Route
          exact
          path="/order-history"
          element={<OrderHistory historyItems={historyItems} />}
        ></Route>
        <Route exact path="/employee" element={<Employee />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
