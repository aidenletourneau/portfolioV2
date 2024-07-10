

export default function Card(props){
  
  return (
      <div className="card">
        <img className="card-picture" src={props.picture}/>
        <a href={props.link} className="card-title">{props.title}</a>
        <p className="card-description">{props.description}</p>
        <div className="card-skills">
          <Skill picture="src\assets\react-logo.png" skill="React"></Skill>
          <Skill picture="src\assets\react-logo.png" skill="React"></Skill>
          
        </div>
      </div>
  );
}

function Skill(props){
  return (
    <div className="skill-card">
      <img className="skill-picture" src={props.picture}></img>
      <h3>{props.skill}</h3>
    </div>
  )
}
