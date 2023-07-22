import React, {useState, useEffect} from 'react';

import loupe from '../../assets/icon-search.svg';
import Card from '../../components/Card/index';
import "../../components/SearchBar/index.css";

export function SearchBar() {
  // J'initialise pour valeur de départ le profil github ocotocat avec la fonction useState({})
  // Ensuite j'utilise la fonction setSearchData pour changer cette valeur de départ avec celle entrée dans la barre de recherche par un utilisateur à chaque fois
  // Enfin j'utilise searchData comme valeur finale 
  const [searchData, setSearchData] = useState({userName:"octocat"});

  // data correspond au donnée de l'utilisateur récupéré via la requete api github
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchDataGit(){
      try{
        const response = await fetch(`https://api.github.com/users/${searchData.userName}`);
        const data = await response.json();
        setData(data);
        //console.log(data);
        //console.log(response);
      } catch (error){
        console.error(error);
      }
    }
      fetchDataGit();
       // Ce tableau permet d'ajouter dans un second temps la donnée apres execution de la requete api
  }, [searchData.userName]);


   // Gestion de mon formulaire de ma barre de recherche
   // Evenement submit
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // Evenement sur la valeur de mon input
  // Je cible l'input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <img className="img-search" alt="icone de loupe" src={loupe} />
        <input 
          type="text" 
          name="userName"
          value={searchData.userName} 
          onChange={handleChange} 
          placeholder="Search GitHub username.."
        />
      </form>
      <Card 
        data = {data}
      />
    </div> 
  )
};
//SearchbarT()

export default SearchBar;
