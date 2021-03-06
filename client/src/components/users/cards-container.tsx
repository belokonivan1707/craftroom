import React from 'react';
import { UserCard } from './user-card';
import { IUser, RefsMap } from './modules';
import { FuckingUsersContext } from '../../pages/users';

interface IProps {
  users: IUser[];
  refsMap: RefsMap;
  refUserPage: React.RefObject<HTMLDivElement>;
  handleChangeUser?: (id: number, name: string) => void;
}

export const CardsContainer = ({ users, refsMap, refUserPage, handleChangeUser }: IProps) => {
  const [context, setContext] = React.useContext(FuckingUsersContext);

  // console.log('RENDER CARD CONTAINER use context -- --`>', context);
  // console.log('ref user page div', refUserPage.current);

  const renderUserCard = (item: IUser) => {
    const key = String(item.id);
    refsMap[key] = {
      ref: React.createRef(),
      active: false
    };
    return (
      <div ref={refsMap[key].ref} key={item.id}>
        <UserCard handleChangeUser={handleChangeUser} user={item} />
      </div>
    );
  };

  return (
    <div
      style={{
        width: '100%',
        marginLeft: 15,
        paddingBottom: `${refUserPage.current?.clientHeight || 700}px`,
        overflow: 'auto'
      }}
    >
      {users.map(renderUserCard)}
    </div>
  );
};
