import React from "react";

const FriendList = ({ children: { friends } }) => {
  return <ul className="friend-list">
    {friends}
  </ul>

}

export default FriendList

