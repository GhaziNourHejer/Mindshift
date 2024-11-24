import React from "react";
import "./styles.css";

const Community = () => {
  const members = ["User1", "User2", "User3", "User4"];

  return (
    <div className="container">
      <h1>Community</h1>
      <ul className="community-list">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
