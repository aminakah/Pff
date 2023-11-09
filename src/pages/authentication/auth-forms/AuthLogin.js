/* eslint-disable prettier/prettier */
import { Navigate  } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

import {
  Button,
  // FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Link,

} from '@mui/material';

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [error, setError] = useState(null);

const handleLogin = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });
    console.log(response.data); // Afficher les données de la réponse
    localStorage.setItem("token", response.data.token);
    const config = {
      headers: {
        Authorization: `Bearer ${response.data.token}`,
      },
    };
    axios.defaults.headers.common = { ...axios.defaults.headers.common, ...config.headers };
    setIsLoggedIn(true); // Définir l'état de connexion sur vrai
  } catch (errorh) {
    console.error(errorh);
    setError("Email ou mot de passe incorrect");
  }
};


if (isLoggedIn) {
  // Si l'utilisateur est connecté, rediriger vers "/user"
  return <Navigate  to="/posts" />;
}
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="email-login"  sx={{ color: '#0C6635' }}>Adresse Mail</InputLabel>
          <OutlinedInput
            fullWidth
            id="email-login"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
            sx={{
              '& fieldset': {
                borderColor: '#0C6635', // Couleur de la bordure
              },
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1}>
          
          <InputLabel htmlFor="password-login"
          sx={{ color: '#0C6635' }} 

            >Mot de Passe</InputLabel>
          <OutlinedInput
            fullWidth
            id="password-login"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            sx={{
              '& fieldset': {
                borderColor: '#0C6635', // Couleur de la bordure
              },
            }}
          />
        </Stack>
      </Grid>
      {error && (
        <Grid item xs={12}>
          <FormHelperText error>{error}</FormHelperText>
        </Grid>
      )}
      <Grid item xs={12}>
        <Button
          disableElevation
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ bgcolor: '#0C6635' }} 
        >
          Connexion
        </Button>
      </Grid>
      <Grid container justifyContent="center">
     <Typography  component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' ,color: '#0C6635'}} color="primary">
        Vous avez déjà un compte? Se connecter
   </Typography>
          </Grid>
    </Grid>
  );
};

export default AuthLogin;
