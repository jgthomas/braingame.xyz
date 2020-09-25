import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/anagram">Anagram</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
