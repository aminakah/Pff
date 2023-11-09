/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Swal from "sweetalert2";
import { PharmacieService } from "services/post.service";

export default function ListePharmacie() {
const [pharmacies, setPharmacie] = useState([]);

  async function getAllPharmacie() {
    const response = await PharmacieService.getAllPharmacie();
    console.log(response.data)
    return response.data;
  }

  async function deletPharmacies(id) {
    try {
      await PharmacieService.deletPharmacies(id);
      const newPosts = pharmacies.filter((pharmacie) => pharmacie.id !== id);
      setPharmacie(newPosts);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Pharmacie supprimée",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erreur Article non supprimé",
      });
    }
  }
 
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPharmacie();
      setPharmacie(data);
    }

    fetchData();
  }, []);

  return {
    columns: [
      { Header: "Titre", accessor: "Title", width: "10%", align: "left" },
      { Header: "Statut", accessor: "Status", align: "left" },
      { Header: "Action", accessor: "Action", align: "center" },
    ],

    rows: pharmacies.map((pharmacie) => ({
      Title:  pharmacie.title,
      Status: pharmacie.status == 0 ?"prive":"public",
      Action: [
          <Link key="edit" to={`/post/edit/${ph.id}`} component={Link}>
          <MDButton variant="text" color="dark">
            <Icon>edit</Icon>&nbsp;modifier
          </MDButton>
        </Link>,
        <MDButton
        key="delete"
        variant="text"
        color="primary"
        onClick={() => {
          Swal.fire({
            title: "Voulez vous confirmer la suppression?",
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Supprimer",
            cancelButtonText: "Annuler",
          }).then((result) => {
            if (result.isConfirmed) {
              deletPharmacies(ph.id); 
            }
          });
        }}
      >
        <Icon>delete</Icon>&nbsp;supprimer
      </MDButton>,
      ],
    })),
  };
}
