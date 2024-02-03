import React from "react";
import { useState } from "react";

const SplitForm = ({ friend, onUpdate }) => {
  const [billVal, setBillVal] = useState(0);
  const [myExpense, setMyExpense] = useState(0);

  const [payer, setPayer] = useState("you");

  console.log(friend);

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = billVal - myExpense;
    if (payer === "you") onUpdate({ ...friend, balance: -balance });
    if (payer === "friend") onUpdate({ ...friend, balance: balance });

    setBillVal(0);
    setMyExpense(0);
    setPayer("you");
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={billVal === 0 ? "" : billVal}
        placeholder=""
        onChange={(e) => setBillVal(Number(e.target.value))}
      />
      <label>👨‍💼 Your expense</label>
      <input
        type="text"
        value={myExpense === 0 ? "" : myExpense}
        placeholder=""
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />
      <label>👫 {friend.name}'s expense</label>
      <input
        type="text"
        value={billVal - myExpense === 0 ? "" : billVal - myExpense}
        disabled="disabled"
      />
      <label>🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
};

export default SplitForm;
