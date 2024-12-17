import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getIndividualCountryData } from "../../../api/CountryData";
import Loader from "../Loader/Loader";
import "./CountryDetails.css";

const CountryDetails = () => {
  const data = useParams();
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualCountryData(data.id);
      if (res.status === 200) {
        setCountryData(res.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      {countryData && (
        <div className="country-container">
          <div className="country-flag-image">
            <img src={countryData.flags.svg} alt={countryData.flags.alt} />
          </div>
          <div className="country-details">
            <h2>{countryData.name.official}</h2>

            <div className="country-info-container">
              <p>
                <span>Native Names: </span>
                {Object.keys(countryData.name.nativeName)
                  .map((key) => countryData.name.nativeName[key].common)
                  .join(", ")}
              </p>
              <p>
                <span>Population: </span>
                {countryData.population.toLocaleString()}
              </p>
              <p>
                <span>Region: </span>
                {countryData.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryData.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {countryData.capital}
              </p>

              <p>
                <span>Top Level Domain: </span>
                {countryData.tld[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.keys(countryData.currencies)
                  .map((curElem) => countryData.currencies[curElem].name)
                  .join(", ")}
              </p>
              <p>
                <span>Languages: </span>
                {Object.keys(countryData.languages)
                  .map((key) => countryData.languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
