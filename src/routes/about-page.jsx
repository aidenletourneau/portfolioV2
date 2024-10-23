import profilePic from "/assets/me-color.png";
export default function AboutPage() {
  return (
    <div className='info-region'>
      <img className='about-picture' src={profilePic}></img>
      <p className='about-text'>
        Hey! I'm Aiden... I'm a software developer focused on developing
        full-stack applications.
      </p>
    </div>
  );
}
