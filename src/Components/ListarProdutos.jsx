import { useState } from "react";

const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto])
    }

export default function ListarProdutos() {
    return (
        <div>
             <h1>Produtos para Bebês</h1>
    
             {
              ListarProdutos.map((produto) =>
                <div key={produto.id}>
                  <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                  <button onClick={()=> adicionarPedidos(produto)}>Adicionar</button>
                </div>
              )
             }
             </div>
     
    );
}