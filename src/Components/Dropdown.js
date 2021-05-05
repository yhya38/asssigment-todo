import React, { useState } from "react";

function Dropdown() {
  const [select, setSelect] = useState({ tech: "" });

  const handleChange = (e) => {
    setSelect({ tech: e.target.value });
  };
  return (
    <div>
      <div>
        <select id="lang" onChange={handleChange.bind(this)}>
          <option value="">Dropdown</option>
          <option value="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps">
            angular
          </option>
          <option value="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components">
            Bootstrap
          </option>
          <option value="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps.">
            React
          </option>
        </select>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        ducimus? Ab, accusantium esse. Similique assumenda quae, aspernatur
        deleniti magni voluptatem quidem pariatur blanditiis id accusantium
        natus excepturi maxime commodi quod quaerat corrupti exercitationem sunt
        quos quas? Qui natus maiores quae illum, blanditiis soluta accusantium
        nam veritatis, magnam nobis accusamus architecto cumque! Sit repellendus
        accusantium, rem laudantium fuga voluptas cupiditate molestiae vero
        minima. Vel eaque sint deleniti obcaecati deserunt reprehenderit natus
        molestias, enim saepe neque accusamus ipsam corporis eum repellat
        placeat harum, distinctio dicta inventore! Aut natus fugiat facilis
        officia molestias reprehenderit, assumenda consectetur pariatur nesciunt
        enim fuga unde a corporis.
      </p>
      <div className="info">
        <h2>Information : {select.tech}</h2>
      </div>
    </div>
  );
}

export default Dropdown;
