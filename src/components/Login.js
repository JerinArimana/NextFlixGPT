import { useRef, useState } from "react";
import Header from "./Header";
import { ValidationCheck } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const togleSignInForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const sumbmitHandler = (e) => {
    e.preventDefault();
    const message = ValidationCheck(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isLoginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
            alt="banner"
          />
        </div>
        <form className="rounded-lg bg-opacity-70 mx-auto right-0 left-0 absolute  w-3/12 my-36 bg-black text-white p-12">
          <h1>{isLoginForm ? "Sign In" : "Sign Up"}</h1>

          {isLoginForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full text-black"
          />
          <p>{errorMessage}</p>
          <button
            onClick={sumbmitHandler}
            className="p-4 my-4 w-full bg-red-800 rounded-lg"
          >
            {isLoginForm ? "Sign Up" : "Sign In"}
          </button>
          <p onClick={togleSignInForm}>
            New to Nextflix? {isLoginForm ? "Sign in" : "Sign up now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
