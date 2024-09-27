

'use client'
import Pagina from "@/app/components/Pagina";
import apiMovie from "@/services/apiMovies";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Disney(){
    
    const [filmes, setFilmes] = useState([])
    
    useEffect(()=>{
         
       apiMovie.get('movie/popular').then(resultado=>{
            setFilmes(resultado.data.results)

        })

    }, [])
    
    return(
        <>
      
      <Pagina titulo='Disney'>
           
         
          {filmes.map(item=>(
                           <p>{item.title}</p>
                       ))}

          <Row>
    
                {filmes.map(item => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card style={{ maxWidth:'250'}}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+item.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.tvShows}<br/>
                                        {item.createdAt}<br/>
                                        {item.updatedAt}<br/>
                                    </Card.Text>
                                    <Link className="btn btn-danger" href={`/filmes/${item.id}`}></Link>

                                </Card.Body>
                            </Card>
                    </Col>
                ))}
            </Row>
            </Pagina>
          </> 
      

    )

}