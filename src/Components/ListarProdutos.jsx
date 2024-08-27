import React from 'react';
import "../globals.css";

export default function ListarProdutos({ produtos }) {
    return (
        <div className="bloco-principal">
            <div className="bloco-produtos">
              
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <p>{produto.cor}</p>
                        <p>{produto.marca}</p>
                        <p>{produto.tamanho}</p>
                        <p>{produto.indicação}</p>
                        <button onClick={() => console.log('Produto adicionado:', produto)}>Adicionar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
