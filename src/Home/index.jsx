import { useState } from "react";
import React from "../Components/ListarProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([
        { id:1, nome:'Carrinho', preco:'R$ 350,00', cor:'Rose', marca:'Galzerano', Medidas:'103cm x 69cm x 85cm', Peso:'5.2kg'},
        { id:2, nome:'Banheira', preco:'R$ 132,00', cor:'', marca:'', Medidas:'', Peso:''},
        { id:3, nome:'Berço', preco:'R$ 549,00', cor:'', marca:'', Medidas:'', Peso:''},
        { id:4, nome:'Cadeira Alta', preco:'R$ 479,00', cor:'', marca:'', Medidas:'', Peso:''},
        { id:5, nome:'', preco:'', cor:'', marca:'', Medidas:'', Peso:''}
    ]);

    const Home = () => {
        setProdutos([produtos, setProdutos])
    }


    return(
        <>
        <p>Minha Home</p>
        </>
    );
}