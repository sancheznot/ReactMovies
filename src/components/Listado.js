import React, { useEffect, useState } from "react";
import { Edit } from "./Edit";

export const Listado = ({ list, setList }) => {
  // const [list, setList] = useState([]);
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const movie = JSON.parse(localStorage.getItem("movies"));
    movie === null ? setList([]) : setList(movie);
    setList(movie);
    return movie;
  };

  const deleteMovie = (id) => {
    // conseguir el id del elemento a eliminar
    const newList = list.filter((item) => item.id !== parseInt(id));
    // actualizar el state
    setList(newList);
    // actualizar el localstorage
    localStorage.setItem("movies", JSON.stringify(newList));
  };

  return (
    <>
      {list != null &&
        list.map((movie) => {
          return (
            <article
              className="peli-item animate__animated animate__zoomInDown"
              key={movie.id}
            >
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>

              <button
                className="edit"
                onClick={() => {
                  setEdit(movie.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Borrar
              </button>
              {/* aparece formulario para editar  */}

              {edit === movie.id && (
                
                <Edit movie={movie} getMovies={getMovies} setList={setList} setEdit={setEdit}/>
              )}
            </article>
          );
        })}
    </>
  );
};
