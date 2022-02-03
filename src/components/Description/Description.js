import React from "react"
import PropTypes from 'prop-types';


const Description = ({ user }) => {
  return <div className="description">
      <img
        src={user.avatar}
        alt="dser avatar"
        className="avatar"
      />
      <p className="name">{user.username}</p>
      <p className="dag">{'@' + user.tag}</p>
      <p className="tocation">{user.location}</p>
    </div>
}
Description.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
}

export default Description