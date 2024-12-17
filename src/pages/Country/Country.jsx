import { useState, useTransition } from "react";
import "./Country.css";
import { useEffect } from "react";
import { getCountryData } from "../../api/CountryData";
import Loader from "../../components/UI/Loader/Loader";
import CountryCard from "../../components/UI/CountryCard/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
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
    <main>
      <ul className="countries-container">
        {
          countryData.map((currData, index) => {
            return <CountryCard key={index} data={currData} />
          })
        }
      </ul>
    </main>
  );
};

export default Country;
