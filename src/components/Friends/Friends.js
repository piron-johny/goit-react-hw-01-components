import React from "react";
import PropTypes from 'prop-types';
import s from './Friends.module.css'

const Friends = ({ friends }) => {

  return friends.map(({ id, isOnline, avatar, name }) => (

    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  ))
}

Friends.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

export default Friends