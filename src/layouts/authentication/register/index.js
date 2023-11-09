/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Navigate  } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });
      console.log(response.data); // Afficher les données de la réponse
     <Navigate  to="/post" />
      
      // Vous pouvez ajouter ici d'autres actions comme la redirection vers la page de connexion

    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite lors de l'inscription.");
    }

  };

  return (
    <BasicLayout image={bgImage}>
    <Card>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
        <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
            inscription
          </MDTypography>
          <MDBox mb={2}>
            <MDInput type="text" label="Nom" fullWidth onChange={(e) => setName(e.target.value)} />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="email" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="password" label="Mot de passe" fullWidth onChange={(e) => setPassword(e.target.value)} />
          </MDBox>
          {error && (
            <MDBox mb={2}>
              <MDTypography variant="body2" color="error">
                {error}
              </MDTypography>
            </MDBox>
          )}
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth onClick={handleRegister}>
              S inscrire
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
    </BasicLayout>
  );
}

export default Register;
