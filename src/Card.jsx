

export default function Card({link, picture, title, description, skills}){
  
  return (
      <div className="card">
        <img className="card-picture" src={picture}/>
        <a href={link} className="card-title">{title}</a>
        <p className="card-description">{description}</p>
        <div className="card-skills">
          {skills.map((skill, index) => 
          <Skill key={index} skill={skill[0]} picture={skill[1]} />) || <h1>No Projects!</h1>}
        </div>
      </div>
  );
}

function Skill({skill, picture}){
  return (
    <div className="skill-card">
      <img className="skill-picture" src={picture}></img>
      <p>{skill}</p>
    </div>
  )
}
