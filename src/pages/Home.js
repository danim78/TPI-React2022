import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/forms/SearchForm";
import NewsList from "../components/colletions/NewsList";

function Home({busqueda, onSubmit}){

    
    return(
        <>
            <NewsList busqueda={busqueda} onSubmit={onSubmit}/>
        </>
    )
}

export default Home