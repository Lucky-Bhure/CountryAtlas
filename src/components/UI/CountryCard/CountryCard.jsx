import { NavLink } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ data }) => {
  const { flags, name, population, region, capital } = data;
  return (
    <li className="country-card-container bg-orange-box">
      <img src={flags.svg} className="flag-size" alt={flags.alt} />
      <h3>
        {name.common.length > 10
          ? name.common.slice(0, 12) + "..."
          : name.common}
      </h3>
      <div className="card-details">
        <p>
          <b>Capital:</b> {capital[0]}
        </p>
        <p>
          <b>Population:</b> {population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
      </div>
      <NavLink to={`/country/${name.common}`}>
        <button className="read-btn">Read More</button>
      </NavLink>
    </li>
  );
};

export default CountryCard;
