/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { PostService } from 'services/post.service';
import { Avatar, Button, Card, CardContent, Typography ,TextField,Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserService } from 'services/user.service';
import { red } from '@mui/material/colors';
import Swal from 'sweetalert2';
function MyFriend() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [users, setUsers] = useState([]);
  const [publicArticles, setPublicArticles] = useState([]);
  const [fiendArticles, setFriendArticles] = useState([]);
  const [showFullText, setShowFullText] = useState(Array(fiendArticles.length).fill(false));
  const [friendAccept, setFriendsAccept] = useState([]);

  const addFriend = (id) =>{
    UserService.addFriend(id).
    then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Demande envoyée avec succès'
      })
    }
    )
    .catch(error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: error.response.data.message
      })
    })
  }
  const loadFriends=()=>{
    UserService.getFriends().then(response =>{
      console.log(response)
      setFriends(response.data);
    }).catch(error => {
      console.error(error);
    });

  }

  useEffect(() => {
   loadFriends()
    PostService.getFriendArticles()
      .then(response => {
        setFriendArticles(response.data.articles);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });

      UserService.getFriendRequests()
      .then(response => {
        setFriendRequests(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleSearch = () => {
    // Effectuez une requête à votre API pour rechercher des utilisateurs par leur nom d'utilisateur
     UserService.rechercherUser(searchTerm).then(response => {
      setSearchResults(response.data.item);
        console.log(response.data.item)
      })
      .catch(error => {
        console.error('Erreur lors de la recherche d\'utilisateurs', error);
      });
  };

 

  const acceptedFriend = (id) => {
    UserService.acceptFriend(id)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Accepter avec succès'
        })
        loadFriends();
      })
      .catch(error => {
        console.error('Erreur lors du chargement des articles publics', error);
      });
  };

  const deleteFriend = (id) => {
    UserService.deleteFriend(id)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'decliner avec succès'
        })
        loadFriends();
      })
      .catch(error => {
        console.error('Erreur lors du chargement des articles publics', error);
      });
  };

  return (
  
  

<DashboardLayout>
    <DashboardNavbar />
    <div>
        <h1>Gestion des Amis</h1>
        <div>
            <Link key="addFriend" to={'/mes-amis/add'} component={Link}>
                <Button size="small" variant="contained" color="primary">Ajouter un ami</Button>
            </Link>
            <div style={{ marginTop: '16px' }}>
                <TextField
                    label="Rechercher un ami..."
                    variant="outlined"
                    style={{width:"400px"}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSearch()}
                    style={{ marginLeft: '16px' }}
                >
                    Rechercher
                </Button>
            </div>
        </div>
        <div style={{ marginTop: '24px' }}>
            <h2>Résultats de la recherche :</h2>
            {searchResults.map((user) => (
                <Card key={user.id} variant="outlined" style={{ marginTop: '8px' }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center', width:"400px"}}>
                            <Avatar alt={user.name} />
                            
                            <Typography style={{ marginLeft: '16px' }}>{user.name}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => addFriend(user.id)}
                                style={{ marginLeft: 'auto' }}
                            >
                                Ajouter comme ami
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div style={{ marginTop: '24px' }}>
            <h2>Mes demandes amis :</h2>
            {friendRequests.map((friend, index) => (
                <Card key={index} variant="outlined" style={{ marginTop: '8px' }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={friend.name} />
                            <Typography style={{ marginLeft: '20px' }}>{friend.name}</Typography>
                            <Box display="flex" justifyContent="center" alignItems="center">
                            <Button  variant="contained"  color="primary"  onClick={() => acceptedFriend(friend.id)}  
                            style={{ marginLeft: '40px' ,marginTop: '0px' }} > Accepter
                            </Button>
                            <Button
                            
                              variant="contained"
                              color="primary" // Utilisez "primary" pour la couleur par défaut de Material-UI
                              style={{ marginLeft: "12px", backgroundColor: "red", color: "white" }}
                              onClick={() => deleteFriend(friend.id)}  > 
                              Refuser </Button>
                       </Box>
                        </div>
                       
                    </CardContent>
                </Card>
            ))}
        </div>
        <div style={{ marginTop: '24px' }}>
            <h2>Mes Amis :</h2>
            {friends.map((friend, index) => (
                <Card key={index} variant="outlined" style={{ marginTop: '8px' }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={friend.name} />
                            <Typography style={{ marginLeft: '16px' }}>{friend.name}</Typography>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div style={{ marginTop: '24px' }}>
            <h2>Articles Publics de Mes Amis :</h2>
            {fiendArticles.map((post, index) => (
                <Card key={index} variant="outlined" style={{ marginTop: '8px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2">
                            {showFullText[index] ? post.body : post.body.slice(0, 255)}
                            <Link to={`/details/${post.id}`} component={Link}>
                                <Button color="primary" style={{ marginLeft: '16px' }}>
                                    Détails
                                </Button>
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
</DashboardLayout>

  );
}

export default MyFriend;
