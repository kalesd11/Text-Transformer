import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
              <div className="container">
                <a className="navbar-brand text-danger" href="/"><b><i>Text</i>-Edit</b></a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="btn btn-primary" href="/" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        
                       
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar