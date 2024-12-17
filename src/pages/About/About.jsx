import React from "react";
import CountryFactCard from "../../components/UI/CountryFactCard/CountryFactCard";
import CountryData from "../../api/CountryData.json";
import "./About.css";

const About = () => {
  return (
    <main>
      <section className="about-container">
        <div className="about-text-container">
          <p>Here are the interesting Facts we're proud of</p>
        </div>
        <ul className="about-country-fact-container">
          {CountryData.map((currEle) => (
            <CountryFactCard key={currEle.id} data={currEle} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;
