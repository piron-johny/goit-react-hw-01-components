import React from "react";
import s from './Profile.module.css'

function Profile({ children: { userStats, description } }) {
  return (
    <div className={s.profile}>
      {description}
      {userStats}
    </div>
  )
}

export default Profile