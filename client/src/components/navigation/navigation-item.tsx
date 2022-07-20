import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import ListItem from '@mui/material/ListItem/ListItem';
import Typography from '@mui/material/Typography/Typography';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IProps {
  path: string;
  currentPath: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

  isActive?: boolean;
}

export const NavigationItem: React.FC<IProps> = ({ path, currentPath, title, Icon }) => {
  const isActive = currentPath.replace('/', '').startsWith(path.replace('/', ''));

  return (
    <>
      <ListItem sx={{ padding: 0 }}>
        <Link to={path} style={{ width: '100%', borderBottom: '1px solid #DDDD' }}>
          <Button
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color: `${isActive ? 'secondary' : 'text.secondary'}`
            }}
          >
            <Icon />
            <Typography variant="body2" sx={{ paddingLeft: '10px', textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </Button>
        </Link>
      </ListItem>
    </>
  );
};
