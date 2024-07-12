import React, { useState } from 'react';
import './subject.css';

const Subject = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="subjects section" id="subject_taught">
      <h2 className="section__title">Subjects Taught</h2>
      <span className="section__subtitle">List of subjects taught by me</span>

      <div className="subject__container container grid">
        <div className="subject__content">
          <div>
            {/* <i className="uil uil-web-grid subject__icon"></i> */}
            <i class="fa-solid fa-globe subject__icon"></i>
            <h3 className="subject__title">Web Technology</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Web Technology</h3>
              <p className="subject__modal-description">Syllabus of Web Technology</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            <i class="fa-solid fa-network-wired subject__icon"></i>
            <h3 className="subject__title">Computer Networks</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Computer Networks</h3>
              <p className="subject__modal-description">Syllabus of Computer Networks</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            <i class="fa-brands fa-wpexplorer subject__icon"></i>
            <h3 className="subject__title">Engineering Exploration</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Engineering Exploration</h3>
              <p className="subject__modal-description">Syllabus of Engineering Exploration</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            {/* <i class="fa-light fa-laptop-code subject__icon"></i> */}
            <i class="fa-solid fa-desktop subject__icon"></i>
            <h3 className="subject__title">Programming in C</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 4 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Programming in C</h3>
              <p className="subject__modal-description">Syllabus of Programming in C</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            <i class="fa-solid fa-laptop-code subject__icon"></i>
            <h3 className="subject__title">Programming in C++</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(5)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 5 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Programming in C++</h3>
              <p className="subject__modal-description">Syllabus of Programming in C++</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            <i class="fa-solid fa-chart-line subject__icon"></i>
            <h3 className="subject__title">Design and Analysis of Algorithms</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(6)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 6 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Design and Analysis of Algorithms</h3>
              <p className="subject__modal-description">Syllabus of Design and Analysis of Algorithms</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="subject__content">
          <div>
            {/* <i className="uil uil-window subject__icon"></i> */}
            <i class="fa-solid fa-envelope-circle-check subject__icon"></i>
            <h3 className="subject__title">Design Thinking &<br/> Project Based Learning</h3>
          </div>
          <span className="subject__button" onClick={() => toggleTab(7)}>
            View More
            <i className="uil uil-arrow-right subject__button-icon"></i>
          </span>
          <div className={toggleState === 7 ? "subject__modal active-modal" : "subject__modal"}>
            <div className="subject__modal-content">
              <i onClick={() => toggleTab(null)} className="uil uil-times subject__modal-close"></i>
              <h3 className="subject__modal-title">Design Thinking &<br/> Project Based Learning</h3>
              <p className="subject__modal-description">Syllabus of Design Thinking &<br/> Project Based Learning</p>
              <ul className="subject__modal-units grid">
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit I -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit II -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit III -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit IV -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit V -</p>
                </li>
                <li className="subject__modal-unit">
                  <i className="uil uil-check-circle subject__modal-icon"></i>
                  <p className="subject__modal-info">Unit VI -</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subject;
