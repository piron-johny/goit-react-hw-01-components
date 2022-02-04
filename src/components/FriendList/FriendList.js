import React from "react";
import s from './FriendList.module.css'

const FriendList = ({ children: { friends } }) => {
  return <ul className={s.list}>
    {friends}
  </ul>

}

export default FriendList

