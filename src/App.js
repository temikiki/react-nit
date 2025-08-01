import "./App.css"

function HelloWorld({name}){
  return(
    <main>
      <div className="card">
        <img 
          className="header-img"
          src="/images/summer.jpeg" 
          alt="" 
        />
        <p className="tag">Learning</p>
        <p>Published 21 Dec 2013</p>
        <h1>HTML and CSS Foundations</h1>
        <p className="content">These languages are the backbone of every website, defining content, structure, and presentation</p>

        <div className="profile">
          <img className= "profileTag" src="/images/man.jpeg" alt="" />
          <p>{name}</p>
        </div>
      </div>
    </main>
  )
}

export default HelloWorld;