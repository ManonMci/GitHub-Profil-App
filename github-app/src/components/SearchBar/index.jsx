import React, {useState, useEffect} from 'react';
import "../../components/SearchBar/index.css";
import loupe from '../../assets/icon-search.svg';
import Card from '../../components/Card/index';

export function SearchBar() {
  // J'initialise pour valeur de départ le profil github ocotocat avec la fonction useState({})
  // Ensuite j'utilise la fonction setSearchData pour changer cette valeur de départ avec celle entrée dans la barre de recherche par un utilisateur à chaque fois
  // Enfin j'utilise searchData comme valeur finale 
  const [searchData, setSearchData] = useState('');
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
    name: "The Octocat",
    bio: "Je suis la mascotte de Github. Consulte les profils de la communauté ! ",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    login: "Octocat",
    following:0,
    followers:0,
    public_repos:0,
    location:'San Francisco',
    html_url:'https://github.com/octocat',
    company:'Github',
    twitter_username:'Not available',
    
  }); // data : donnée de l'utilisateur récupéré via la requete api

   // Gestion des évènements du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // Evenement sur la valeur de mon input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData(value);
  }

  // Evenement sur le bouton
  const handleClick = (event) => {
    event.preventDefault();
    setShowData(true);
  }

  useEffect(() => {
    async function GetDataGithub(){
      try{
        const response = await fetch(`https://api.github.com/users/${searchData}`);
        const data = await response.json();
        setData(data);
        //console.log(data);
        //console.log(response);
      } catch (error){
        console.error(error);
      }
    }
    if (showData) {
      GetDataGithub();
    }
       // Ce tableau permet d'ajouter dans un second temps la donnée apres execution de la requete api
  }, [searchData, showData]);

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <img className="img-search" alt="icone de loupe" src={loupe} />
        <input 
          type="text" 
          name="userName"
          value={searchData} 
          onChange={handleChange} 
          placeholder="Search GitHub username.."
        />
        <button onClick={handleClick} className="button-form">Search</button>
      </form>
      <Card 
        data = {data}
      />
    </div> 
  )
};

export default SearchBar;
