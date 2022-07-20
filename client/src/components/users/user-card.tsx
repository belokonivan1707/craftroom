import React from 'react';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import CardActions from '@mui/material/CardActions/CardActions';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';

export const UserCard = React.memo(({ user, handleChangeUser }: any) => {
  const { id: userID, name } = user;
  const [editedUserName, setEditedUserName] = React.useState<any>();

  console.log('RENDER USER CARD', userID);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUserName(event.target.value);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 600, mb: 2, py: 0.25, px: 0.5 }}>
      <CardContent>
        <Typography variant="caption">{name}</Typography>
        <input name="name" onChange={handleChangeName} />
      </CardContent>

      <CardActions>
        <Button onClick={() => handleChangeUser(userID, editedUserName)}>Change Name</Button>
      </CardActions>
    </Card>
  );
});
