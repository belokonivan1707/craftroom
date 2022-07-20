import React from 'react';
import Paper from '@mui/material/Paper/Paper';
import { placeholderApi } from '../api/api';
import { useQuery } from '../hooks/useQuery';
import { useNavigate } from 'react-router-dom';
import { isEmptyString } from '../lib/utils/typeinference';
import { IUser, RefsMap } from '../components/users/modules';
import { CardsContainer } from '../components/users/cards-container';
import { SideBarContainer } from '../components/users/side-bar-container';
import { MainLayout } from '../components/layouts/main-layout';

export const FuckingUsersContext = React.createContext<IUser[] | [] | any | React.Context<any>>([]);

const Users: React.FC = () => {
  // console.log('RENDER USERS PAGE');
  const refsMap: RefsMap = {};
  const refUserPage = React.useRef<HTMLDivElement>(null);

  const [context, setContext] = React.useState<IUser[]>([]);

  const [users, setUsers] = React.useState<IUser[]>([]);
  const [usersLoading, setUsersLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const search = useQuery('users-search');
  const [searchInputValue, setSearchInputValue] = React.useState(search);

  const handleChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInputValue(value);
  };

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
          setContext(usersData);
        })
        .finally(() => {
          setUsersLoading(false);
        });
    }
    getUsersPostsData();
  }, []);

  const handleChangeUser = React.useCallback((id: number, editedName: string) => {
    setUsers(prev => prev.map(item => (item.id !== id ? item : { ...item, name: editedName })));
  }, []);

  const handleSideBarClick = (refKey: string) => {
    (refsMap[refKey].ref as React.MutableRefObject<HTMLDivElement>).current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start'
    });
    refsMap[refKey].active = true;
  };

  if (usersLoading) {
    return <h1>Loding...</h1>;
  }

  return (
    <MainLayout
      pageName="Fucking users"
      pageDescription="Fucking users page where everything is fake"
    >
      <Paper
        ref={refUserPage}
        style={{
          display: 'flex',
          height: 'calc(100vh - 130px)'
        }}
      >
        <FuckingUsersContext.Provider value={[context, setContext]}>
          <SideBarContainer users={users} handleSideBarClick={handleSideBarClick} />

          {/* <input type="text" onChange={handleChangeSearchInput} value={searchInputValue} /> */}

          <CardsContainer
            refUserPage={refUserPage}
            refsMap={refsMap}
            users={users}
            handleChangeUser={handleChangeUser}
          />
        </FuckingUsersContext.Provider>
      </Paper>
    </MainLayout>
  );
};

export default Users;
