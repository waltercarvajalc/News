import React from 'react'

export default function Header({categories = [], getNews}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Noticias IUD</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={getNews}
            >
                <option value='' >Selecciona una categoría...</option>
                {
                    categories.map(categoria => {
                        return (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        )
                    })
                }
                
            </select>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}