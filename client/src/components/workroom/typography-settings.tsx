import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import ElderlyIcon from '@mui/icons-material/Elderly';

export const TypographySettings = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="inherit">inherit</Typography>
        <Typography variant="overline">overline</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
      </Grid>

      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" startIcon={<ElderlyWomanIcon />}>
              contained
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" endIcon={<ElderlyIcon />}>
              outlined
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="text">text</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
