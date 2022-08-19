import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthenticationAction } from "../Store/AuthenticationSlice";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [hasError, setHasError] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const usernameEntered = usernameInputRef.current.value;
    const passwordEntered = passwordInputRef.current.value;
    if (
      !(usernameEntered.trim().length > 0) &&
      !(passwordEntered.trim().length > 8)
    ) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
      dispatch(AuthenticationAction.Auth({ username: usernameEntered }));
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="login Illus"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="flex items-center justify-center mb-4">
                <h1 className="font-bold text-lg">Sign In</h1>
              </div>
              <form onSubmit={formSubmitHandler}>
                <div className="mb-6">
                  <input
                    ref={usernameInputRef}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-6">
                  <input
                    ref={passwordInputRef}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                {hasError && (
                  <span className="text-red-500 text-x text-center">
                    username or password invalid
                  </span>
                )}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignIn;
