import picture1 from "../../public/assets/portfolioIMG.png";
import picture2 from "../../public/assets/droneIMG.png";
import picture3 from "../../public/assets/blogIMG.png";
import meddyImg from "../../public/assets/meddyImg.png";
import nextImg from "../../public/assets/next.png";
import reactLogo from "../../public/assets/react-logo.png";
import pythonLogo from "../../public/assets/python-logo.svg";
import mongodbLogo from "../../public/assets/mongodb-logo.png";
import expressLogo from "../../public/assets/express-logo.png";
import nodeLogo from "../../public/assets/node-logo.png";
import pekkishImg from "../../public/assets/pekkish-img.png";
import Heading from "../components/Heading";
import Card from "../components/Card";
import mapboxLogo from "../../public/assets/mapbox-logo.png";

export default function PortfolioPage() {
  return (
    <>
      <Heading title='Projects' />
      <div className='info-region'>
        <Card
          link='https://meddybear.co'
          picture={meddyImg}
          title='Meddy'
          description='Medication web-app that standardizes healthcare patient admission, with medication, doses, and preventing conflicting prescriptions.'
          skills={[
            ["Next", nextImg],
            ["Node", nodeLogo],
            ["MongoDB Atlas", mongodbLogo],
          ]}
        />
        <Card
          link='https://github.com/aidenletourneau/pekkish'
          picture={pekkishImg}
          title='Pekkish'
          description='Road trip planner mainly focused on dining options along the route of a road trip'
          skills={[
            ["React", reactLogo],
            ["Node", nodeLogo],
            ["Mapbox", mapboxLogo],
          ]}
        />
        <Card
          link='https://github.com/aidenletourneau/portfolio'
          picture={picture1}
          title='Portfolio Website'
          description='This portfolio website was made with a front-end consisting of node.js, express, and react'
          skills={[
            ["React", reactLogo],
            ["Node", nodeLogo],
          ]}
        />
        <Card
          link='https://github.com/aidenletourneau/portfolio'
          picture={picture2}
          title='Orientation Drone'
          description='Part of team developing drone software that will be used by UCF faculty to film and photograph future UCF orientations'
          skills={[["Python", pythonLogo]]}
        />
        <Card
          picture={picture3}
          title='Blog Website'
          description='A blog website utilizing express and a mongoDB database for users to store their previous posts and change existing ones'
          skills={[
            ["Express", expressLogo],
            ["MongoDB Atlas", mongodbLogo],
          ]}
        />
      </div>
    </>
  );
}
