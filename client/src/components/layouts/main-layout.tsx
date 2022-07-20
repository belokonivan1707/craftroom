// Main layout with Drawer and Header
import React from 'react';
import { styled, Typography, Breadcrumbs } from '@mui/material';
import { Box } from '@mui/system';
import { isString } from '../../lib/utils/typeinference';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

interface MainLayoutProps extends React.ComponentProps<'div'> {
  pageName?: string;
  pageDescription?: string;
  noBreadcrumbs?: boolean;
  //   breadcrumbs?: MuiBreadcrumb[];
}

export interface MuiBreadcrumb {
  label: string;
  url: string;
}

interface MuiBreadcrumbsProps {
  items?: MuiBreadcrumb[];
  title?: string;
  naked?: boolean;
  rootLabel?: string;
}

const StyledLink = styled(Link)({
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline'
  }
});

function MuiBreadcrumbsPure(props: MuiBreadcrumbsProps) {
  const { items, title, rootLabel, naked } = props;
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {!naked && rootLabel && (
        <StyledLink to="/home" color="textPrimary">
          {rootLabel}
        </StyledLink>
      )}
      {Array.isArray(items)
        ? items.map(breadcrumb => (
            <StyledLink
              key={`breadcrumb-${breadcrumb.label}`}
              to={breadcrumb.url}
              color="textPrimary"
            >
              {breadcrumb.label}
            </StyledLink>
          ))
        : null}
      <Typography color="primary">{title}</Typography>
    </Breadcrumbs>
  );
}

export const MuiBreadcrumbs = React.memo(MuiBreadcrumbsPure);

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const { children, pageName, pageDescription, noBreadcrumbs } = props;

  return (
    <React.Fragment>
      <Box>
        <MuiBreadcrumbs
          rootLabel={'Home'}
          //   items={[{ label: 'label', url: 'url' }]}
          title={pageName}
          naked={noBreadcrumbs}
        />
        {isString(pageDescription) && (
          <StyledTypography gutterBottom variant="caption" color="textSecondary">
            {pageDescription}
          </StyledTypography>
        )}
      </Box>
      <Box id="main-layout">{children}</Box>
    </React.Fragment>
  );
};
