import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
  
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
    
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon qualification__active"></i> Education    
                </div> 

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience    
                </div> 
            </div>

            <div className="qualification__section">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Ph.D Appeared</h3>
                        <span className="qualifiction__subtitle"></span>

                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2013
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    
                    <div></div>
                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification__title">Master Of Engineering (ME)</h3>
                        <span className="qualifiction__subtitle">Pune University</span>

                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2014-2016
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachlor Of Engineering (BE)</h3>
                        <span className="qualifiction__subtitle">Pune University</span>

                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2009-2013
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Lecturer</h3>
                        <span className="qualifiction__subtitle">K. K. Wagh Polytechnic</span>

                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i> 2013-2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div> */}

                <div className="qualification__data">
                    
                    <div></div>
                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification__title">Assistant Professor</h3>
                        <span className="qualifiction__subtitle">K. K. Wagh Educational Society</span>

                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2013-Present
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        </div>

        
    </section>
  )
}

export default Qualification