import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <img
          src="https://i.ibb.co/MMSnMbF/NAR-LOGO.jpg"
          alt=""
          className="w-24 h-24 rounded-lg"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Details</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
