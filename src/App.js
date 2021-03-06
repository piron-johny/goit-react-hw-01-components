import React from "react";
import PropTypes from "prop-types";
// Prifile
import Profile from "./components/Profile/Profile";
import UserStats from "./components/UserStats/UserStats";
import Description from "./components/Description/Description";
// Statistics
import Statistics from "./components/Statistics/Statistics";
import StaticsList from "./components/StaticsList/StaticsList";
// Friends
import FriendList from "./components/FriendList/FriendList";
import Friends from "./components/Friends/Friends";
// TransactionHistory
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Transaction from "./components/Transaction/Transaction";
//data
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Profile>
        {{
          userStats: <UserStats user={user.stats} />,
          description: <Description user={user} />,
        }}
      </Profile>
      <Statistics>
        {{
          staticsList: <StaticsList data={data} />,
        }}
      </Statistics>
      <FriendList>
        {{
          friends: <Friends friends={friends} />,
        }}
      </FriendList>
      <TransactionHistory>
        {{
          transaction: <Transaction transactions={transactions} />,
        }}
      </TransactionHistory>
    </div>
  );
}

Profile.propsTypes = {
  user: PropTypes.node,
  data: PropTypes.node,
  transactions: PropTypes.node,
};
export default App;
