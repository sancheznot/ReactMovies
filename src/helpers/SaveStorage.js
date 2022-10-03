export const guardarStore = (key, elemento) => {
  // conseguir el localstorage item
  let elementos = JSON.parse(localStorage.getItem(key));
  // comprobar si existe array
  if (Array.isArray(elementos)) {
    // si existe array, añadir nuevo item
    elementos.push(elemento);
    // si no existe array, crear array y añadir item
  } else {
    // crear array con la nueva pelicula
    elementos = [elemento];
  }
  // guardar array en localstorage
  const elementoSave = localStorage.setItem(key, JSON.stringify(elementos));
  // devolver objeto guardado
  return elementoSave;
};
