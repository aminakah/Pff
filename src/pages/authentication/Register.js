/* eslint-disable prettier/prettier */
// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';

// ================================|| REGISTER ||================================ //

const Register = () => (
  <AuthWrapper>
    <Grid container spacing={3 }  sx={{ maxWidth: '1200px' }}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 }, color: '#0C6635' }}>
          <Typography variant="h3">Inscrivez-vous</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 },color: '#0C6635' }}>
          <Typography  variant="h6">pour pouvoir commander des  medicaments</Typography>
        </Stack>
      </Grid>
      
      <Grid item xs={12}>
        <FirebaseRegister />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Register;
