import { useState, useTransition } from "react";
import "./Country.css";
import { useEffect } from "react";
import { getCountryData } from "../../api/CountryData";
import Loader from "../../components/UI/Loader/Loader";
import CountryCard from "../../components/UI/CountryCard/CountryCard";
import SearchFilter from "../../components/UI/SearchFilter/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
    });
  }, []);

  const searchFilter = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  }

  const selectFilter = (country) => {
    if (filter === "all") {
      return country;
    }
    if (country.region === filter) {
      return country
    }
  }

  const filterCountryData = countryData.filter((country) => searchFilter(country) && selectFilter(country))

  if (isPending) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (<>
    <main>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countryData={countryData} setCountryData={setCountryData}/>

      <ul className="countries-container">
        { 
          filterCountryData &&
          filterCountryData.map((currData, index) => {
            return <CountryCard key={index} data={currData} />
          }) 
        }
      </ul>
    </main>
  </>
  );
};

export default Country;
