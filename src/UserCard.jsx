import React from 'react';

function UserCard(props) {
    const { name, age, profession } = props;
  return (
    <div style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default UserCard;
