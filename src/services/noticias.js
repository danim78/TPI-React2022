import { API_KEY, OMDB_API_HOST } from "./constantes";
// import axios from "axios";

export const getNoticias = async (busqueda, page, pageSize) => {
  try {
    // https://newsapi.org/v2/everything?q=${busqueda}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=es
    const respuesta = await fetch(
      `${OMDB_API_HOST}?q=${busqueda}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}&language=es`
    );
    return respuesta.json();
  } catch (error) {
    return { isError: true };
  }
};
