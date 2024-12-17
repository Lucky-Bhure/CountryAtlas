import { NavLink } from "react-router-dom";
import "./Home.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <main>
        <section className="explore-main-container">
          <div className="explore-text-container">
            <h1>Explore the World, One Country at a Time.</h1>
            <p>
              Discover the history, culture, and beauty of every nation. Sort
              search and filter through countries to find the details you need.
            </p>
            <NavLink to={"/country"} className="explore-btn">
              <button >
                Start Exploring <MdOutlineArrowRightAlt size={30} className="arrow"/>
              </button>
            </NavLink>
          </div>
          <div className="explore-image-container">
            <img src="./world.png" alt="image" />
          </div>
        </section>
      </main>
      <About />
    </>
  );
};

export default Home;
