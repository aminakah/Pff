/* eslint-disable prettier/prettier */

import api from "./api";

const getAllPharmacie=()=>{
   return api.get('/allpharmacies')
      
  }

  const MaPharmacie=()=>{
   return api.get('/pharmaciess')
      
  }
  const addPharmacies=(data)=>{
   return api.pharmacies('/ajouterPharmacie', data);
      
  }
  const deletPharmacies=(id)=>{
   return api.delete(`supprimerPharmacie/${id}`, id);
  }

  const editPharmacies=(id)=>{
   return api.delete(`modifierPharmacie/${id}`, id);
      
  }
const getpharmaciesById=(id)=>{
 return api.get(`/details/${id}`)
    
}

  

const pharmaciOuvert=()=>{
   return api.get(`/rechercherUser?search=${searchTerms}`)

}




export const  PharmacieService={
   getAllPharmacie,
   getpharmaciesById,
   addPharmacies,
   deletPharmacies,
   editPharmacies,
   pharmaciOuvert,
   MaPharmacie,

  }
  