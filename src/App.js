import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile/Profile'
import UserStats from "./components/UserStats/UserStats";
import Description from "./components/Description/Description";
import user from "./data/user.json"

import './App.css';

function App() {
  return (
    <Profile>
      {{
        userStats: <UserStats user={user.stats}/>,
        description: <Description user={user}/>
      }}
    </Profile>

  )
}


Profile.propsTypes = {
  user: PropTypes.node,

  // username: PropTypes.string,
  // tag: PropTypes.string,
  // location: PropTypes.string,
  // avatar: PropTypes.string,
  // stats: PropTypes.string,

}
export default App;
