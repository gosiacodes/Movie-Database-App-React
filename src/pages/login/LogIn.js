import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import Modal from "../../components/modal/Modal";
import NavBtnGoHome from "../../components/UI/NavBtnGoHome";

const LogIn = () => {
  // Setting states and navigate
  const navigate = useNavigate(); 
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );
  const [usersList, setUsersList] = useState(
    localStorage.getItem("usersList")
      ? JSON.parse(localStorage.getItem("usersList"))
      : []
  );
  const [goHome, setGoHome] = useState(false);

  // Adding new user to list (if it doesn't already exist)
  const addNewUser = (user) => {
    let check = false;
    usersList.map((value) => {
      return value.email === user.email ? (check = true) : "";
    });
    if (check) {
      setMessage(`User ${user.email} already exists!`);
      setShowModal(true);
    } else {
      setUsersList((usersList) => [...usersList, user]);
      setMessage(`User ${user.email} created! You can login now.`);
      setShowModal(true);
    }
  };

  // Logging in user with checking if email and password are correct
  // and then navigating to home page
  const loginUser = (user) => {
    let checkEmail = false;
    usersList.map((value) => {
      return value.email === user.email ? (checkEmail = true) : "";
    });
    if (!checkEmail) {
      setMessage(`User ${user.email} doesn't exists!`);
      setShowModal(true);
    } else {
      let checkPassword = false;
      usersList.map((value) => {
        return value.email === user.email && value.password === user.password
          ? (checkPassword = true)
          : "";
      });
      if (!checkPassword) {
        setMessage("Incorrect password!");
        setShowModal(true);
      } else if (checkPassword) {
        setUsername(user.email);
        setGoHome(true);
      }
    }
  };

  // Logging out user with setting username values to empty string in state and LocalStorage
  const logoutUser = () => {
    setUsername("");
    localStorage.setItem("username", "");
  };

  // If user is logged in, setting username in LocalStorage and navigating to home page
  useEffect(() => {
    if (username !== "") {
      localStorage.setItem("username", username);
      if (goHome) {
        navigate("/");
      }
    }
  }, [username, goHome, navigate]);

  // Adding updated list of users to LocalStorage
  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList, message]);

  // Returning components and showing them in DOM, sending props to components
  // If user is not logged in, showing login container with sign up and sign in components
  // If user is logged in, showing logout container with username
  // Showing modal component with message when boolean is true
  return (
    <Fragment>
      <main>
        {username !== "" ? (
          <div className="logout-container">
            <picture>
              <source
                srcSet={process.env.PUBLIC_URL + "/images/camera-action_64.png"}
                media="(max-width: 350px)"
              />
              <source
                srcSet={process.env.PUBLIC_URL + "/images/camera-action_96.png"}
                media="(max-width: 600px)"
              />
              <img src={process.env.PUBLIC_URL + "/images/camera-action_128.png"} alt="camera action" />             
            </picture>
            <h2 className="logout-title">See you again!</h2>
            <h3 className="username">{username}</h3>
            <button
              type="button"
              className="login-btn"
              onClick={() => logoutUser()}
            >
              Sign out
            </button>
          </div>
        ) : null}
        {username === "" ? (
          <div className="login-container">
            <SignIn loginUser={loginUser}></SignIn>
            <div className="line"></div>
            <SignUp addNewUser={addNewUser}></SignUp>
          </div>
        ) : null}
        <NavBtnGoHome></NavBtnGoHome>
        {showModal ? (
          <Modal
            message={message}
            showModal={showModal}
            setShowModal={setShowModal}
          ></Modal>
        ) : null}
      </main>
    </Fragment>
  );
};

export default LogIn;
