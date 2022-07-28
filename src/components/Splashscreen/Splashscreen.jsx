import { useState } from "react";
import Button from "../Button";
import logo from "../../assets/logo.svg";
import "./index.css";

const Splashscreen = ({onHandleClick}) => {
  const [usernameInput, setUsernameInput] = useState("");
  
  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    onHandleClick=(false) 
  };

  return (
    <div className="Splashscreen">
      <form className="Splashscreen__form" onSubmit={onGetUsername}>
        <img className="form__img" src={logo} alt="logo" />
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="Splashscreen__form--input"
          type="text"
          placeholder="Write your name here"
          required
        />
        <Button type="submit" btnTextContent="Login" />
      </form>
    </div>
  );
};

export default Splashscreen;
