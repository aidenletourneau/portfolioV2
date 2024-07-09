
export default function Header(props){
  
  return(
    <header className="header">
      <div className="page-title">
        <p>Aiden Letourneau</p>
        <p>{props.title}</p>
      </div>
      
      <nav>
        <ul>
          <a><li>Home</li></a>
          <a><li>Portfolio</li></a>
          <a><li>About</li></a>
          <a><li>Resmue</li></a>
        </ul>
      </nav>
    </header>
  );
}

