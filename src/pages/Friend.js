import React, { useState } from 'react';

function Friend() {
  const [inviteLink, setInviteLink] = useState("https://t.me/your_bot?start=YOUR_REFERRAL_CODE");
  const [friends, setFriends] = useState([]);

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert("Invite link copied to clipboard!");
    });
  };

  return (
    <div className="card">
      <h2>Invite Friends</h2>
      <button onClick={copyInviteLink}>Copy Invite Link</button>
      <h3>Invited Friends:</h3>
      {friends.length > 0 ? (
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      ) : (
        <p>No friends invited yet.</p>
      )}
    </div>
  );
}

export default Friend;
