import React from "react";

function Profile({ children: { userStats, description } }) {
  return (
    <div className="profile">
      {description}
      {userStats}
    </div>
  )
}

export default Profile