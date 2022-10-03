import React from "react";

export const Edit = ({ movie, getMovies, setList, setEdit }) => {
  const { title, description, id } = movie;

  const editMovie = (e, id) => {
    e.preventDefault();
    const data = e.target;

    const moviesEditable = getMovies();
    const index = moviesEditable.findIndex(
      (moviesEditable) => moviesEditable.id === id
    );

    // crear un nuevo objeto con los datos editados
    const movieEdit = {
      id,
      title: data.title.value,
      description: data.description.value,
    };
    // actualizar el array de peliculas
    moviesEditable[index] = movieEdit;
    // actualizar el localstorage
    localStorage.setItem("movies", JSON.stringify(moviesEditable));
    // actualizar el state
    setList(moviesEditable);
    setEdit(0);
    getMovies();
  };
  return (
    <div className="edit_form">
      <h3 className="title">Editar Movie: {title}</h3>
      <form onSubmit={(e) => editMovie(e, id)}>
        <input
          type="text"
          id="title"
          placeholder="Titulo"
          name="titulo"
          defaultValue={title}
        />
        <textarea
          id="description"
          placeholder="Descripción"
          name="description"
          defaultValue={description}
        ></textarea>
        <input type="submit" id="save" value="Update" name="save" />
      </form>
    </div>
  );
};
