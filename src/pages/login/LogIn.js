import { Fragment, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import Modal from "../../components/modal/Modal";
import NavBtnGoHome from "../../components/UI/NavBtnGoHome";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const logoutUser = () => {
    setUsername("");
    localStorage.setItem("username", "");
  };

  useEffect(() => {
    if (username === "") {
      localStorage.setItem("username", "");
    } else {
      localStorage.setItem("username", username);
      if (goHome) {
        navigate("/");
      }
    }
  }, [username, goHome, navigate]);

  useEffect(() => {
    console.log(JSON.stringify(usersList));
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList, message, location.state]);

  return (
    <Fragment>
      <main>
        {username !== "" ? (
          <div className="logout-container">
            <picture>
              <source
                srcSet="/images/camera-action_64.png"
                media="(max-width: 350px)"
              />
              <source
                srcSet="/images/camera-action_96.png"
                media="(max-width: 600px)"
              />
              <img src="/images/camera-action_128.png" alt="camera action" />
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
