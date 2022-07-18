import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

export interface INavBarRoute {
    path: string;
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const NAV_BAR_ROUTES = [
    { path: '/home', title: 'home', icon: HomeIcon },
    { path: '/users', title: 'users', icon: PeopleIcon },
    { path: '/workroom', title: 'workroom', icon: EngineeringIcon }
]