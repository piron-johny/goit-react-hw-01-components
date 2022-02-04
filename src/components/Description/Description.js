import React from "react";
import PropTypes from "prop-types";
import s from './Description.module.css'

const Description = ({ user }) => {
  return (
    <div className={s.description}>
      <img src={user.avatar} alt="dser avatar" className={s.avatar} />
      <p className={s.name}>{user.username}</p>
      <p className={s.dag}>{"@" + user.tag}</p>
      <p className={s.tocation}>{user.location}</p>
    </div>
  );
};
Description.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Description;
