import Header from '../Header'
import Card from '../Card'
import Heading from '../Heading'
import picture1 from '../assets/portfolioIMG.png'
import picture2 from '../assets/droneIMG.png'
import picture3 from '../assets/blogIMG.png'
import react_logo from '../assets/react-logo.png'
import SkillCard from '../SkillCard'

function Root() {
  return(
    <>
      <Header title="Computer Science Portfolio"/>
      <div className="page-content">
      <p className="bio">This is my personal portfolio project while I continue to build my skills studying computer science at the University of Central Florida, Orlando. You will find any projects I'm working and my current resume on the website and a little bio section about me.</p>
      <Heading title="Projects"/>
      <div className="info-region">
        <Card link="https://github.com/aidenletourneau/portfolio" picture={picture1} title="Portfolio Website" description="This portfolio website was made with a front-end consisting of node.js, express, and react"/>
        <Card link="https://github.com/aidenletourneau/portfolio" picture={picture2} title="Orientation Drone" description="Part of team developing drone software that will be used by UCF faculty to film and photograph future UCF orientations"/>
        <Card picture={picture3} title="Blog Website" description="A blog website utilizing express and a mongoDB database for users to store "/>
      </div>
      <Heading title="Skills"/>
      <div className="info-region">
        <SkillCard skill="React" picture={react_logo}/>
        <SkillCard skill="React" picture={react_logo}/>
        <SkillCard skill="React" picture={react_logo}/>
      </div>
      <Heading title="Projects"/>
      </div>
    </>
  );
}

export default Root
