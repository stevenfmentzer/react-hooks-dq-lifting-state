import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const users = userData
  const [user, setUser] = useState(users[0]);

  function handleUserClick(target){
    setUser(users[target])
  }

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={handleUserClick}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={user} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
