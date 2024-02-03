import React from "react";

const Friend = ({ friend, onSelect }) => {
  const handleSelect = () => {
    onSelect(friend.id);
  };

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance !== 0 ? (
        <p className={friend.balance < 0 ? "red" : "green"}>
          {friend.balance < 0
            ? `${friend.name} owes you $${Math.abs(friend.balance)}`
            : `You owe ${friend.name} $${Math.abs(friend.balance)}`}
        </p>
      ) : (
        <p>{`You and ${friend.name} are even`}</p>
      )}
      <button className="button" onClick={handleSelect}>
        Select
      </button>
    </li>
  );
};

export default Friend;
