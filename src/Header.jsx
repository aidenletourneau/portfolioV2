import {Link } from 'react-router-dom'
export default function Header(){
  
  return(
    <header className="header">
      <div className="page-title">
        <p>Aiden Letourneau</p>
        <p>Computer Science Portfolio</p>
      </div>
      
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/portfolio"><li>Portfolio</li></Link>
          
          <Link to="/resume"><li>Resume</li></Link>
        </ul>
      </nav>
    </header>
  );
}

