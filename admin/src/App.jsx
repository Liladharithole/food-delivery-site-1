import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/orders" element={<Order></Order>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
