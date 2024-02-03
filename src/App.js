import React from "react";
import FriendsList from "./components/FriendsList";
import { useState } from "react";
import SplitForm from "./components/SplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friendList, setFriendList] = useState(initialFriends);
  const [friendAdd, setFriendAdd] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleFriendAdd = (friend) => {
    console.log(friend);
    setFriendList([...friendList, friend]);
    setFriendAdd((s) => !s);
  };

  const handleSelection = (id) => {
    console.log(id);
    const friend = friendList.filter((friend) => friend.id === id);
    setSelectedFriend(friend[0]);
  };

  const handleBalanceUpdate = (friend) => {
    console.log(friend);
    setFriendList(
      friendList.map((frnd) =>
        frnd.id === friend.id
          ? { ...frnd, balance: friend.balance + frnd.balance }
          : frnd
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <FriendsList
        friendList={friendList}
        isFriendAdd={friendAdd}
        onFriendAdd={handleFriendAdd}
        onSelect={handleSelection}
      />
      {selectedFriend && (
        <SplitForm friend={selectedFriend} onUpdate={handleBalanceUpdate} />
      )}
    </div>
  );
};

export default App;
