import React from 'react';

export const UserCard = React.memo(({ user, handleChangeUser }: any) => {
  const { id, name } = user;
  const [editedUserName, setEditedUserName] = React.useState<any>();

  console.log('User component rerender', id);

  const onChangeName = (e: any) => {
    setEditedUserName(e.target.value);
  };

  const onClickEditName = () => {
    handleChangeUser(id, editedUserName);
  };

  return (
    <div style={{ marginBottom: 10, padding: 5, border: '1px solid black', height: '250px' }}>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <input name="name" onChange={onChangeName} />
      <button onClick={onClickEditName}>Change Name</button>
    </div>
  );
});
