import React from "react";

const UserInfo = ({ email }) => {
  return (
    <li className="nav-item">
      <span className="navbar-text">Logged in as {email}</span>
    </li>
  );
};

export default UserInfo;
