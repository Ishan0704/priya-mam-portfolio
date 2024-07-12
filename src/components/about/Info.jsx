import React from 'react'

const Info = () => {
  return (
    
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bxs-award about__icon' ></i>
        <h3 className="about__title">Experience</h3>
        <spam className="about__subtitle">11 + years</spam>
      </div>

      <div className="about__box">
        <i class='bx bxs-briefcase about__icon'></i>
        <h3 className="about__title">Projects</h3>
        <spam className="about__subtitle">100 + Guided</spam>
      </div>

      <div className="about__box">
        <i class='bx bxs-trophy about__icon' ></i>
        <h3 className="about__title">Hackthone</h3>
        <spam className="about__subtitle">20 + Win</spam>
      </div>
    </div>
  )
}

export default Info
