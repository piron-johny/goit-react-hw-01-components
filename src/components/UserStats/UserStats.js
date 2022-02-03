import React from "react";
import PropTypes from "prop-types";

const UserStats = ({ user }) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{user.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{user.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{user.likes}</span>
      </li>
    </ul>
  );
};

UserStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default UserStats;
