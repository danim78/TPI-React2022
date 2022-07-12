import { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import axios from 'axios'
import NewsCard from './NewsCard'


function NewsList(){

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [datos, setDatos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=${page}&pageSize=10&language=es`)
        .then(response => {
            setDatos([...datos, ...response.data.articles])
            setLoading(false)
        })
    },[page])

    const cargarMas = (e) =>{
        e.preventDefault()
        setPage(page+1)
    }

    return(
        <><div className="py-5">
             <div className="container">
                <div className="row hidden-md-up">       
                {datos && datos.length > 0 ?
                    datos.map((item) => {
                        return(
                            <div className="row-md-4">
                            
                                <NewsCard item={item}></NewsCard>
                                
                            </div>
                        )
                    })
                    : (<Alert>No hay elementos</Alert>
                )}
                </div>
                {loading ? (
                    <Button variant="success" disabled={true}> Cargando ...</Button>
                ) : (
                    <Button variant="success" onClick={cargarMas}> Cargar más... +</Button>
                )}
                
             </div>
         </div>         
        </>
    )

}

export default NewsList;