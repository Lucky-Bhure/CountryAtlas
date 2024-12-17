import "./CountryFactCard.css"

const CountryFactCard = ({data}) => {

  const {countryName, capital, population, interestingFact} = data;

  return (
    <li className="fact-card-container bg-orange-box">
      <h1 className="country-name">{countryName}</h1>
      <div className="fact-card-details">
        <p><span>Capital:</span> {capital}</p>
        <p><span>Population:</span> {population}</p>
        <p><span>Intresting Fact:</span> {interestingFact}</p>
      </div>
    </li>
  )
}

export default CountryFactCard
