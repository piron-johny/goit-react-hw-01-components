import React from "react";
// import PropTypes from 'prop-types';



function Profile({children: { userStats, description }}) {
  return (
    <div class="profile">
      {description}
      {userStats}
    </div>
  )
}

// Profile.propTypes ={ 
//   username: PropTypes.string,
//    tag: PropTypes.string, 
//    location: PropTypes.string, 
//    avatar: PropTypes.string, 
//    stats: PropTypes.string,
// }

export default Profile