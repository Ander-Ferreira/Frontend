
'use client'
import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page(){
    
    const [numero, setNumero] = useState(0)

    function alterarNumero(){
        let numero = 0

       

        const aumentar = ()=>{setNumero(numero + 1)}

        



    }

    function alterarNumero2(){

        let numero = 0
        
        
    }

    return(
       <>
       <Pagina titulo='Titulo'></Pagina>
       <h1>{numero}</h1>
       <Button onClick={()=> alterarNumero(-1)}>+</Button>
       <Button onClick={()=> alterarNumero2(1)}>-</Button>
       </>

    )

}