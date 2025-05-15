import React from "react";
import { Link } from "react-router-dom";
import { FiArchive, FiHome, FiPlusCircle } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/archived">
            <FiArchive />
          </Link>
        </li>
        <li>
          <Link to="/notes/add">
            <FiPlusCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
