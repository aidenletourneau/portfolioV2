

export default function Card(props){
  
  return (
      <div className="card">
        <img className="card-picture" src={props.picture}/>
        <a href={props.link} className="card-title">{props.title}</a>
        <p className="card-description">{props.description}</p>
        <Skill/>
      </div>
  );
}

function Skill(){




  return (
    <div className="skill">

    </div>
  )
}
