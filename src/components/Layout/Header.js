import React from "react";
import meals from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showCart={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
