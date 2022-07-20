import React from 'react';
import { FuckingUsersContext } from '../../pages/users';
import { IUser } from './modules';

interface IProps {
  users: IUser[];
  handleSideBarClick: (id: string) => void;
}

export const SideBarContainer = ({ users, handleSideBarClick }: IProps) => {
  const [context, setContext] = React.useContext(FuckingUsersContext);
  // console.log('RENDERED SIDE BAR CONTAINER use context---> ', context);

  const renderSideBarItem = (item: IUser) => {
    return (
      <div
        key={item.id}
        onClick={() => handleSideBarClick(String(item.id))}
        style={{ marginBottom: 5, padding: 5, border: '1px solid black' }}
      >
        {item.name}
      </div>
    );
  };

  return (
    <div style={{ width: 200, height: '100%' }}>
      <div>{users.map(renderSideBarItem)}</div>
    </div>
  );
};
