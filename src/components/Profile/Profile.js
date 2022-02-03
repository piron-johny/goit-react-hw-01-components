import React from "react";
// import PropTypes from 'prop-types';



function Profile({ children: { userStats, description } }) {
  return (
    <div className="profile">
      {description}
      {userStats}
    </div>
  )
}

export default Profile