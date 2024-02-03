import React from "react";
import { useState } from "react";

const FriendAddForm = ({ onAdd, handleAddBtn }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imgUrl) return;

    const id = crypto.randomUUID();
    const friend = { id, name, image: `${imgUrl}?=${id}`, balance: 0 };
    onAdd(friend);
    handleAddBtn((s) => !s);

    setName("");
    setImgUrl("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        placeholder=""
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={imgUrl}
        placeholder="https://i.pravatar.cc/48"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};

export default FriendAddForm;
