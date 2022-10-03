import React, { useState } from "react";
import { guardarStore } from "../helpers/SaveStorage";

export const Create = ({setList}) => {
  const titulos = "Titulo de la pelicula";
  const [movies, setMovies] = useState({
    title: "",
    description: "",
  });

  const { title, description } = movies;

  const getFormData = (e) => {
    e.preventDefault();
    const data = e.target;
    const title = data.title.value;
    const description = data.description.value;

    const movie = {
      id: new Date().getTime(),
      title,
      description,
    };
    setMovies(movie);

    // actualizar estado de list 

      setList((list) => {
        if(Array.isArray(list)) return [...list,movie] 
        else return [movie] 
      });



    // guardar en localstorage
    guardarStore("movies", movie);
  };
  


  return (
    <>
      <div className="add">
        <h3 className="title">{titulos}</h3>
        {title && description && (
          <p>
            has agregado la pelicula con exito Titulo: {title} Descripcion:{" "}
            {description}
          </p>
        )}
        <form onSubmit={getFormData}>
          <input type="text" id="title" placeholder="Titulo" name="titulo" />
          <textarea
            id="description"
            placeholder="Descripción"
            name="description"
          ></textarea>
          <input type="submit" id="save" value="Guardar" name="save" />
        </form>
      </div>
    </>
  );
};
