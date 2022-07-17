import { children, useEffect, useState } from "react";
import Home from "../pages/Home";
import NewsList from "./colletions/NewsList";
import SearchForm from "./forms/SearchForm";
import Header from "./Header";

function Layout(props){

    const [busqueda, setBusqueda] = useState(null);

    console.log(busqueda);

    const onSubmit = (data) => {
        console.log(data);
        const nuevaBusqueda = data.busqueda;
        setBusqueda(nuevaBusqueda)
      }
  /*   setBusqueda = (e) => {busqueda = e;
    //console.log(busqueda)
    } */

    useEffect(() => {
        
    },[busqueda])

    return(
        <>
            <Header/>
            {/* {props.children} */}
            <SearchForm busqueda={busqueda} onSubmit={onSubmit}></SearchForm>
            <Home busqueda={busqueda} onSubmit={onSubmit}></Home>
            
        </>
    )
}
export default Layout