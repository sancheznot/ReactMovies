import React, { useState } from "react";

export const Buscador = ({ list, setList }) => {

  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false)

  const SearchMovie = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    

    // filtrar movie
    let filterMovie = list.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
  
    // comprobar si hay peliculas que matchean con la busqueda
    if (search.length <= 1 || filterMovie <= 0) {
      filterMovie = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true)
    }else{
      setNotFound(false)
    }
    setList(filterMovie);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {search}</h3>
        {(notFound === true && search.length > 1 ) && (
        <span className="notfound">No se consiguio coincidencias</span>
        )}
        <form>
          <input
            type="text"
            id="search_field"
            name="busqueda"
            autoComplete="off"
            onChange={SearchMovie}
          />
        </form>
      </div>
    </>
  );
};
