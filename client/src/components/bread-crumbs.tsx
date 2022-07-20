import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';

export const BreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};
