import { useState } from "react";
import {Listado} from './components/Listado';
import {Buscador} from './components/Buscador';
import { Create } from './components/Create';

function App() {
  // STATE GLOBAL
  const [list, setList] = useState([]);

  return (
    <div className="layout">
      {/* <!--Cabecera--> */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/* <!--Barra de navegación--> */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* <!--Contenido principal--> */}
      <section id="content" className="content animate__animated animate__fadeInLeftBig">
        {/* <!--aqui van las peliculas--> */}
          {/* Listado de peliculas */}
          <Listado list={list} setList={setList}/>
      </section>

      {/* <!--Barra lateral--> */}
      <aside className="lateral">
        {/* Buscador */}
        <Buscador list={list} setList={setList}/>
      {/* Create */}
      <Create setList={setList}/>
      </aside>

      {/* <!--Pie de página--> */}
      <footer className="footer">
        &copy; Máster en React -
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
  );
}

export default App;
