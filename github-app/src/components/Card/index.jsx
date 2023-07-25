import "../../components/Card/index.css";
import twitter from '../../assets/icon-twitter.svg';
import website from "../../assets/icon-website.svg";
import company from "../../assets/icon-company.svg";
import location from "../../assets/icon-location.svg";


function Card({data}) {
  // Gestion du blocage du nombre de requete api 
  if (data.message === "Not Found") {
    return <div className="card"><p>Aie.. aucun utilisateur trouvé !</p></div>
  }
  if (data.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting") {
    return <div className="card"><p>Oups.. Vous ne pouvez plus envoyer de requete API ! (Ben oui c'est comme ça.)</p></div>
  }
  
  //formatage de la date : 23 novembre 2034
  const createdAtDate = new Date(data.created_at);
  const options = { day: 'numeric', year: 'numeric', month: 'long'};
  const formattedDate = createdAtDate.toLocaleDateString("en-GB", options);

  return (
    <div className="global">
      <div className="card">
        <div className="avatar">
          <img
            className="avatar-img"
            src={data.avatar_url} 
            alt="image de profil"
          />
        </div>
        <div className="profil">
          <div className="bio">
            <div className="pseudo">
              <div className="">
                <h1>{data.name}</h1>
                <a href={data.html_url}>
                  <p className="p-lien">@{data.login}</p>
                </a>
              </div>
              <div className="date">
                <p className="p-date">Joined {formattedDate}</p>
              </div>
            </div>
            <p>{data.bio === null ? 'Oh non, pas de biographie..' : data.bio}</p>
          </div>
          <div className="array">
            <table>
              <tbody>
                <tr>
                  <td>Repos</td>
                  <td>Followers</td>
                  <td>Following</td>
                </tr>
                <tr>
                  <td className="td-value">{data.public_repos}</td>
                  <td className="td-value">{data.followers}</td>
                  <td className="td-value">{data.following}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="social">
            <ul className="ul-social">
              <div className="social-1">
                <a>
                  <li>
                    <img className= "img-icone" 
                      alt="icone de localisation" 
                      src={location} />
                      {data.location === null ? 'Not available' : data.location}
                  </li>
                </a>
                <a href={data.html_url}>
                  <li>
                    <img className= "img-icone"
                      alt="icone de site" 
                      src={website} />
                      {data.html_url === null ? 'Not available' : data.html_url}
                  </li>
                </a>
              </div>
              <div className="social-2">
                <a>
                  <li>
                    <img className= "img-icone"
                      alt="icone de twitter" 
                      src={twitter} />
                      {data.twitter_username === null ? 'Not available' : data.twitter_username}
                  </li>
                </a>
                <a>
                  <li>
                    <img className= "img-icone"
                      alt="icone de github" 
                      src={company} />
                      {data.company === null ? 'Not available' : data.company}
                  </li>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
