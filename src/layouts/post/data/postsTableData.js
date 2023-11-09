/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Swal from "sweetalert2";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import { PostService } from "services/post.service";

export default function PostsTable() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await PostService.mesPost();
    console.log(response.data)
    return response.data;
  }

  async function deleteUser(id) {
    try {
      await PostService.deletPost(id);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Article supprimé",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erreur Article non supprimé",
      });
    }
  }
  async function deleteUserb(id) {
    try {
      // Utilisez la fonction `deletePost` de PostService en passant l'ID
      await PostService.deletePost(id);
  
      // Filtrer les articles pour enlever celui avec l'ID supprimé
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
  
      Swal.fire({
        icon: 'success',
        title: 'Succès !',
        text: 'Article supprimé',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erreur : Article non supprimé',
      });
    }
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return {
    columns: [
      { Header: "Titre", accessor: "Title", width: "10%", align: "left" },
      { Header: "Statut", accessor: "Status", align: "left" },
      { Header: "Action", accessor: "Action", align: "center" },
    ],

    rows: posts.map((post) => ({
      Title:  post.title,
      Status: post.status == 0 ?"prive":"public",
      Action: [
        <Link key="edit" to={`/post/edit/${post.id}`} component={Link}>
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
              deleteUser(post.id);
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
