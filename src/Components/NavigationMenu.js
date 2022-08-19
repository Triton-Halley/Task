import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AuthenticationAction } from "../Store/AuthenticationSlice";

function NavigationMenu() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthenticationAction.Logout());
  };
  const searchResult = useSelector((state) => state.data.searchResult);
  const Account = useSelector((state) => state.auth.username);
  return (
    <>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="flex items-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? " text-white hover:text-gray-700 focus:text-gray-700 p-2 rounded active:bg-blue-500"
                      : " text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <span
                  className="cursor-pointer text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  onClick={logoutHandler}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
          {searchResult && (
            <div className="flex items-center justify-center text-lg ">
              Search Result : {searchResult}
            </div>
          )}
          <div className="flex items-center relative">
            <div className="flex items-center space-x-2">
              <img
                className="h-6 w-6 rounded-full"
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                alt="avatar"
              />
              <strong>{Account}</strong>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationMenu;
