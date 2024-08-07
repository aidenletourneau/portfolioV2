import picture1 from '../assets/portfolioIMG.png'
import picture2 from '../assets/droneIMG.png'
import picture3 from '../assets/blogIMG.png'
import reactLogo from '../assets/react-logo.png'
import pythonLogo from '../assets/python-logo.svg'
import mongodbLogo from '../assets/mongodb-logo.png'
import expressLogo from '../assets/express-logo.png'
import nodeLogo from '../assets/node-logo.png'
import pekkishImg from '../assets/pekkish-img.png'
import Heading from '../Heading'
import Card from '../Card'
import mapboxLogo from '../assets/mapbox-logo.png'

export default function PortfolioPage() {



  return (
    <>
        <Heading title="Projects"/>
        <div className="info-region">
          <Card 
            link="https://github.com/aidenletourneau/pekkish" 
            picture={pekkishImg} 
            title="Pekkish" 
            description="Road trip planner mainly focused on dining options along the route of a road trip" 
            skills={[["React", reactLogo], ["Node", nodeLogo], ["Mapbox", mapboxLogo]]}/>
          <Card 
            link="https://github.com/aidenletourneau/portfolio" 
            picture={picture1} 
            title="Portfolio Website" 
            description="This portfolio website was made with a front-end consisting of node.js, express, and react" 
            skills={[["React", reactLogo], ["Node", nodeLogo]]}/>
          <Card 
            link="https://github.com/aidenletourneau/portfolio" 
            picture={picture2} 
            title="Orientation Drone" 
            description="Part of team developing drone software that will be used by UCF faculty to film and photograph future UCF orientations"
            skills={[["Python", pythonLogo], ]}/>
          <Card 
            picture={picture3} 
            title="Blog Website" 
            description="A blog website utilizing express and a mongoDB database for users to store their previous posts and change existing ones"
            skills={[["Express", expressLogo], ["MongoDB", mongodbLogo]]}/>

        </div>
    </>
  )
}