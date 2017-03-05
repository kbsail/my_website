import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


export const PROJECTS = [
  {
    id: 0,
    link: '',
    live: 'http://reqcheck.healthkc.org',
    github: 'https://github.com/codeforamerica/ReqCheck',
    subtitle: 'Coding',
    title: 'ReqCheck',
    description: 'Open-source medical algorithm using CDC data to evaluate a patient\'s vaccination record',
    img: '../assets/img/ReqCheckWeb.png'
  },
  {
    id: 1,
    link: 'https://www.codeforamerica.org/summit/workshops/#1955',
    live: '',
    github: '',
    subtitle: 'Workshop',
    title: 'Technical Talent Initiative',
    description: 'Co-facilitated a workshop at the 2016 Code for America Summit',
    img: '../assets/img/TalentWorkshop.jpg'
  },
  {
    id: 2,
    link: '',
    live: '',
    github: '',
    subtitle: 'Content',
    title: 'Hiring a Digital Services Team',
    description: 'Created a guide for the Kansas City Health Department to assist hiring a new digital services team',
    img: '' },
  { 
    id: 3,
    link: '',
    live: '',
    github: '',
    subtitle: 'Coding',
    title: 'Flyr FairKeep Pricing APIs ',
    description: 'Built pricing and purchasing APIs for core product',
    img: '../assets/img/GetFlyrWeb.png' },
  { 
    id: 4,
    link: '',
    live: '',
    github: '',
    subtitle: 'Workshop',
    title: 'Code for Brazil',
    description: 'Mentored Code for Brazil in stakeholder management, iterative building and user centered design',
    img: '../assets/img/CforBrazil.png'
  },
  {
    id: 5,
    link: '',
    live: '',
    github: '',
    subtitle: 'Coding',
    title: 'ReqCheck Extractor',
    description: 'Continuous https based ETL from legacy SQL Server to Cloud based PostgreSQL database',
    img: ''
  },
  { 
    id: 6,
    link: '',
    live: '',
    github: '',
    subtitle: 'Award',
    title: 'ChimeHack2',
    description: 'Best product',
    img: ''
  },
  {
    id: 7,
    link: '',
    live: '',
    github: '',
    subtitle: 'Award',
    title: 'ChimeHack',
    description: 'Best product',
    img: ''
  }
]

export default React.createClass({
  bindProjectClick(projectID) {
    function handleProjectClick(e) {
      e.stopPropagation();
      window.location = `/projects/${projectID}`
    }
    return handleProjectClick
  },
  render() {
    var linkText = ''
    
    return (
      <div>
        <div className="projects-main-image">
        </div>
        <div className="projects-row">
          {PROJECTS.map(project => (  
            <div
              className="project-container"
              key={project.id}
              style={{cursor: "pointer"}}
              onClick={this.bindProjectClick(project.id)}
              to={{
                pathname: `/projects/${project.id}`
              }}
            >
              <div className="project-details">
                <div className="project-title">
                  <h5>{project.title}</h5>
                  <h6>{project.subtitle}</h6>
                </div>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  {
                    project.live ? <Link href={`${project.live}`} target="_blank">Live</Link> : <div/>
                  }
                  {
                    project.link ? <Link href={`${project.link}`} target="_blank">Info</Link> : <div/>
                  }
                  {
                    project.github ? <Link href={`Github: ${project.github}`} target="_blank">Github</Link>: ''
                  }
                </div>
              </div>
              <div className="project-image">
                {
                  project.img ? <img className="responsive-image" style={{ margin: '0' }} src={project.img} /> : <div/>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
})

// <p>Formerly of <OutsideLink to="https://codeforamerica.org" alt="Code for America">Code for America</OutsideLink> & <OutsideLink to="https://flyrlabs.com" alt="FlyrLabs">FlyrLabs</OutsideLink>.</p>
// <p>Mentorship with <OutsideLink to="https://missionbit.org" alt="MissionBit">MissionBit</OutsideLink>.</p>
        // <div className="awards">
        //   <div className="awards-title">
        //     <i className="fa fa-2x fa-star" aria-hidden="true" /><h2>Honors and Awards</h2>
        //   </div>
        //   <div className="awards-container">
        //     <div className="award-item">
        //       <h5>Code for America Fellowship</h5>
        //       <p>2016 Engineering Fellow</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='684781001101414400'></TweetEmbed>
        //       </div>
        //       <p>Less than 2% of applicants are accepted</p>
        //       <p><Link href="https://www.codeforamerica.org">Code for America</Link>, 2016</p>
        //       <p><Link href="http://archive.codeforamerica.org/about/fellowship/">More Information</Link></p>
        //     </div>
        //     <div className="award-item safebridge">
        //       <h5>Best Product for Incubation</h5>
        //       <p>Awarded for 'SafeBridge'</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='620390041789968385'></TweetEmbed>
        //       </div>
        //       <p>Presented by <Link href="https://www.hearst.com/">Hearst Magazines</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
        //       <p><Link href="https://www.youtube.com/watch?v=PzbminSEayU">ChimeHack2</Link>, 2015</p>
        //       <p><Link href="http://www.elle.com/culture/news/a29317/a-hackathon-with-a-conscience/">More Information</Link></p>

        //     </div>
        //     <div className="award-item">
        //       <h5>Best Product</h5>
        //       <p>Awarded for 'ReSound'</p>
        //       <div className="chime-tweet">
        //         <TweetEmbed id='409531616990478336'></TweetEmbed>
        //       </div>
        //       <p>Presented by <Link href="http://www.chimeforchange.org/">Chime for Change</Link> and <Link href="https://twitter.com/">Twitter</Link></p>
        //       <p><Link href="https://www.youtube.com/watch?v=WpHRSi0JFKY">ChimeHack</Link>, 2013</p>
        //       <p><Link href="https://www.fastcompany.com/3023332/innovation-agents/gucci-teams-up-with-twitter-jawbone-and-more-to-tackle-global-womens-issue">More Information</Link></p>
        //     </div>
        //   </div>
        // </div>
