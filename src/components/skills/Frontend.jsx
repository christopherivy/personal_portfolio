import React from "react";

// let skillLevel_1 = "Basic";
let skillLevel_2 = "Intermediate";
// let skillLevel_3 = "Advanced";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level"> {skillLevel_2} </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level"> {skillLevel_2}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level"> {skillLevel_2}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level"> {skillLevel_2}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level"> {skillLevel_2}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level"> {skillLevel_2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
