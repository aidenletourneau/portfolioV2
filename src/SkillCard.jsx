

export default function SkillCard(props) {

  return (
    <div className="skill-card">
      <img className="skill-picture" src={props.picture}></img>
      <h1>{props.skill}</h1>
    </div>
  )

}