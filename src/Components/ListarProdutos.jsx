import { Link } from "react-router-dom";
import "../globals.css";


export default function ListarProdutos() {
    return (
        <div class="bloco-principal">
        <div className="bloco-produtos">
    
             {
              ListarProdutos.map((produto) =>
                <div key={produto.id}>
                  <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                  <p>{produto.cor}</p>
                  <p>{produto.marca}</p>
                  <p>{produto.tamanho}</p>
                  <p>{produto.indicacao}</p>
                  <button onClick={()=> ListarProdutos(produto)}>Adicionar</button>
                </div>
              )
             }
             </div>
             </div>
     
    );
}