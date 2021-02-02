import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/info/">Info</Link>
      </li>
    </ul>
  );
};

export default Navigation;
