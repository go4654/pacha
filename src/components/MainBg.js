import React from "react";

const MainBg = ({ bg, mainTitle, mainSummary }) => {
  return (
    <section
      className="section_1 main_movieBg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="title_wrap">
        <h1>{mainTitle}</h1>
        <p>{mainSummary.slice(0, 150) + "..."}</p>
      </div>
    </section>
  );
};

export default MainBg;
