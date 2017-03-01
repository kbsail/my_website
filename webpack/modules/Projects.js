import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


export const PROJECTS = [
  { id: 0, type: 'Coding', title: 'ReqCheck', description: 'Open-source medical algorithm using CDC data to evaluate a patient\'s vaccination record', src: '../assets/img/ReqCheckWeb.png' },
  { id: 1, type: 'Workshop', title: 'Recruiting and Retaining Technical Talent', description: 'Co-facilitated a workshop at the 2016 Code for America Summit', src: '../assets/img/TalentWorkshop.jpg' },
  { id: 2, type: 'Content', title: 'Creating a Digital Services Team', description: 'Created a guide to help Kansas City build out their digital services team', src: '../assets/img/CreatingADigitalServicesTeam.png' },
  { id: 3, type: 'Coding', title: 'Flyr FairKeep Pricing APIs ', description: 'Built pricing and purchasing APIs for core product', src: '../assets/img/GetFlyrWeb.png' },
  { id: 4, type: 'Workshop', title: 'Code for Brazil', description: 'Mentored Code for Brazil in stakeholder management, iterative building and user centered design', src: '../assets/img/CforBrazil.png' },
  { id: 5, type: 'Coding', title: 'ReqCheck Extractor', description: 'Continuous https based ETL from legacy SQL Server to Cloud based PostgreSQL database', src: '../assets/img/ReqCheckExtractorWeb.png' }
]

export default React.createClass({
  render() {
    return (
      <div>
        <div className="projects-main-image">
        </div>
        <div className="projects-row">
          {PROJECTS.map(project => (  
            <Link
              key={project.id}
              to={{
                pathname: `/projects/${project.id}`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}
            >
              <div className="project-container">
                <div className="project-title">
                  <h5>{project.title}</h5>
                </div>
                <img className="responsive-image" style={{ margin: '0 10px', borderRadius: '3px' }} src={project.src} />
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
})
