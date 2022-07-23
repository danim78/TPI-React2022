import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SearchForm({busqueda, onSubmit}) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  console.log(errors);
  console.log(busqueda);
  
    /* const onSubmit = (data) => {
      console.log(data);
      const nuevaBusqueda = data.busqueda;
      setBusqueda(nuevaBusqueda)
    } */
  
  /*     const busqueda = (data) => {
        setBusqueda(data.busqueda) 
    }*/

 /*  const enviarBusqueda = (e) => {
    //e.preventDefault();
    setBusqueda(e);
    console.log(busqueda); 
  };*/

  return (
    <>
      <h1>Buscando noticias sobre: {busqueda}</h1>
      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ingresar palabra a buscar"
          type="text" {...register("busqueda", { required: true, minLength: 3 })}
          /* ref={register({ minLength: 2 })} */
        />
        {errors.busqueda && errors.busqueda.type === "required" && (<span>Término requerido</span>)}
        {errors.busqueda && errors.busqueda.type === "minLength" && (<span>Ingrese al menos 3 carateres</span>)}
        <input type="submit"/>
      </form>
      {/* <button onClick={enviarBusqueda}> Ver busqueda </button> */}
    </>
  );
}

export default SearchForm