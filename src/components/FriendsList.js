import React from "react";
import Friend from "./Friend";
import FriendAddForm from "./FriendAddForm";
import { useState } from "react";

const FriendsList = ({ friendList, isFriendAdd, onFriendAdd, onSelect }) => {
  const [isPressed, setPressed] = useState(isFriendAdd);
  return (
    <div className="sidebar">
      <ul>
        {friendList.map((friend) => (
          <Friend friend={friend} key={friend.id} onSelect={onSelect} />
        ))}
      </ul>
      {isPressed && (
        <FriendAddForm onAdd={onFriendAdd} handleAddBtn={setPressed} />
      )}
      <button className="button" onClick={() => setPressed((s) => !s)}>
        {isPressed ? "Close" : "Add Friend"}
      </button>
    </div>
  );
};

export default FriendsList;
