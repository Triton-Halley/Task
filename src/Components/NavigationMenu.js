import { useSelector } from "react-redux";

function NavigationMenu() {
  const searchResult = useSelector((state) => state.data.searchResult);
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
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="/#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="/#"
                >
                  Login
                </a>
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
              <strong>Ali Geshani</strong>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationMenu;
