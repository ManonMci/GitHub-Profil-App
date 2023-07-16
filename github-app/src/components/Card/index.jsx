import "./Card/index.css";
import twitter from "../assets/icon-twitter.svg";
import website from "../assets/icon-website.svg";
import company from "../assets/icon-company.svg";
import location from "../assets/icon-location.svg";


// Gestion du blocage du nombre de requete api 
function Card({ data }) {
  if (data.message === "Not Found") {
    return "Aie.. aucun utilisateur trouvé "
  }

  if (data.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting") {
    return "Oups.. Vous ne pouvez plus envoyer de requete Api !";
  }

  
  // Format de date de type "23 novembre 2034"
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
            <p>{data.bio}</p>
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
                    <img alt="icone de localisation" src={location} />
                    {data.location}
                  </li>
                </a>
                <a href={data.html_url}>
                  <li>
                    <img alt="icone de site" src={website} />
                    {data.html_url}
                  </li>
                </a>
              </div>
              <div className="social-2">
                <a>
                  <li>
                    <img alt="icone de twitter" src={twitter} />
                    {data.twitter_username}
                  </li>
                </a>
                <a>
                  <li>
                    <img alt="icone de github" src={company} />
                    {data.company}
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
