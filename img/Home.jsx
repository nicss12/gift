import React from "react";
import stars from "../../assets/images/stars.png";
import moon from "../../assets/images/moon.png";
import mountainFront from "../../assets/images/mountains_front.png";
import mountainBehind from "../../assets/images/mountains_behind.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home__container">
      <section className="night__container">
        <img src={stars} alt="stars" id="stars" />
        <img src={moon} alt="moon" id="moon" />
        <img src={mountainBehind} alt="mountainBehind" id="mountainBehind" />
        <h2 id="mountainText">hehehehehehehe</h2>
        <img src={mountainFront} alt="mountainFront" id="mountainFront" />
      </section>

      <div className="night__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quo
          cumque optio beatae ipsam repudiandae quibusdam id nisi dolores
          consectetur reiciendis quas nihil? Amet vel, facilis harum dolor quasi
          quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa, quo cumque optio beatae ipsam repudiandae quibusdam id nisi
          dolores consectetur reiciendis quas nihil? Amet vel, facilis harum
          dolor quasi quisquam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa, quo cumque optio beatae ipsam repudiandae
          quibusdam id nisi dolores consectetur reiciendis quas nihil? Amet vel,
          facilis harum dolor quasi quisquam?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa, quo cumque optio beatae ipsam
          repudiandae quibusdam id nisi dolores consectetur reiciendis quas
          nihil? Amet vel, facilis harum dolor quasi quisquam?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Culpa, quo cumque optio beatae
          ipsam repudiandae quibusdam id nisi dolores consectetur reiciendis
          quas nihil? Amet vel, facilis harum dolor quasi quisquam?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Culpa, quo cumque optio
          beatae ipsam repudiandae quibusdam id nisi dolores consectetur
          reiciendis quas nihil? Amet vel, facilis harum dolor quasi
          quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa, quo cumque optio beatae ipsam repudiandae quibusdam id nisi
          dolores consectetur reiciendis quas nihil? Amet vel, facilis harum
          dolor quasi quisquam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa, quo cumque optio beatae ipsam repudiandae
          quibusdam id nisi dolores consectetur reiciendis quas nihil? Amet vel,
          facilis harum dolor quasi quisquam?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa, quo cumque optio beatae ipsam
          repudiandae quibusdam id nisi dolores consectetur reiciendis quas
          nihil? Amet vel, facilis harum dolor quasi quisquam?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Culpa, quo cumque optio beatae
          ipsam repudiandae quibusdam id nisi dolores consectetur reiciendis
          quas nihil? Amet vel, facilis harum dolor quasi quisquam?
        </p>
      </div>
    </div>
  );
};

export default Home;