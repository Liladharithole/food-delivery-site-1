import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Discover a wide variety of delicious dishes from the best restaurants
          around you. Enjoy quick and easy food delivery at your doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
