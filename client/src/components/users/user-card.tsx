import React from 'react';

export const UserCard = React.memo(({ user, handleChangeUser }: any) => {
  const { id: userID, name } = user;
  const [editedUserName, setEditedUserName] = React.useState<any>();

  console.log('RENDER USER CARD', userID);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUserName(event.target.value);
  };

  return (
    <div style={{ marginBottom: 10, padding: 5, border: '1px solid black', height: '250px' }}>
      <h1>{userID}</h1>
      <h1>{name}</h1>
      <input name="name" onChange={handleChangeName} />
      <button onClick={() => handleChangeUser(userID, editedUserName)}>Change Name</button>
    </div>
  );
});
