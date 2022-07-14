import React from 'react';
import { UserCard } from '../components/user-card';
import { placeholderApi } from '../api/api';
import { useQuery } from '../hooks/useQuery';
import { MAX_HEIGHT_HEADER } from '../config/consts';
import { useNavigate } from 'react-router-dom';
import { isEmptyString } from '../utils/typeinference';
import { IUser } from '../types/users-types';

export type RefsMap = Record<string, { ref: React.MutableRefObject<HTMLDivElement | null>; active: boolean }>;

export const Users = () => {
  const refsMap: RefsMap = {};
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [usersLoading, setUsersLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const search = useQuery('users-search');
  const [searchInputValue, setSearchInputValue] = React.useState(search);

  console.log('use query that i looking for', search);
  // console.log('Home component rendered', users);

  React.useEffect(() => {
    if (isEmptyString(searchInputValue)) {
      navigate({ search: `` });
    } else {
      navigate({ search: `users-search=${searchInputValue}` });
    }
  }, [navigate, searchInputValue]);

  React.useEffect(() => {
    async function getUsersPostsData() {
      setUsersLoading(true);
      Promise.all([placeholderApi.get('/users'), placeholderApi.get('/posts')])
        .then(([users, posts]) => {
          const { data: usersData } = users;
          setUsers(usersData);
        })
        .catch((err: any) => {
          console.log(err);
        })
        .finally(() => {
          setUsersLoading(false);
        });
    }
    getUsersPostsData();
    return () => {
      console.log('return from useEffect running');
    };
  }, []);

  const handleChangeUser = React.useCallback((id: number, editedName: string) => {
    setUsers(prev => prev.map(item => (item.id !== id ? item : { ...item, name: editedName })));
  }, []);

  const handleCategoryClick = (refKey: string) => {
    (refsMap[refKey].ref as React.MutableRefObject<HTMLDivElement>).current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start'
    });
    refsMap[refKey].active = true;
  };

  const renderSideBarItem = (item: IUser) => {
    return (
      <div
        key={item.id}
        onClick={() => handleCategoryClick(String(item.id))}
        style={{ marginBottom: 5, padding: 5, border: '1px solid black' }}
      >
        {item.name}
      </div>
    );
  };

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

  const handleChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInputValue(value);
  };

  if (usersLoading) {
    return <h1>Loding...</h1>;
  }

  return (
    <div
      style={{
        display: 'flex',
        padding: '10px 0 0 0',
        background: 'orange',
        height: '100%'
      }}
    >
      <div style={{ width: 200, height: '100%' }}>
        <div>{/* <input type="text" onChange={handleChangeSearchInput} value={searchInputValue} /> */}</div>
        <div>{users.map(renderSideBarItem)}</div>
      </div>
      <div
        style={{
          marginLeft: 15,
          paddingBottom: `calc(100vh - ${70}px)`,
          overflow: 'auto',
          height: `calc(100vh - ${70}px)`
        }}
      >
        {users.map(renderUserCard)}
      </div>
    </div>
  );
};
