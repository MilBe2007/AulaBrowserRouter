import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function Produtos() {
    const [produtos] = useState([
        { id: 1, nome: 'Carrinho Rock', preco: 'R$ 499,00', cor: 'Grey Ice', marca: 'Infanti', tamanho: '103 x 47 x 65 cm', indicação: '0-15 kg', imagens: ['./Imagens/carrinho.png'] },
        { id: 2, nome: 'Poltrona Amamentação Cláudia com Balanço', preco: 'R$ 1.599,20', cor: 'Cinza', marca: 'Gariani', tamanho: '106cm x 72cm x 88cm', indicação: 'Melhora a postura e reduz a tensão no corpo da mãe.', imagens: ['./Imagens/cadeira-amamentação.png'] },
        { id: 3, nome: 'Berço Portátil Iora Air', preco: 'R$ 2.199,00', cor: 'Beyond Graphite', marca: 'Maxi Cosi', tamanho: '85cm x 96cm x 55cm', indicação: '0 à 9kg', imagens: ['./Imagens/berço.png'] },
        { id: 4, nome: 'Cadeira Alta', preco: 'R$ 479,00', cor: 'Rose', marca: 'Galzerano', tamanho: '103cm x 69cm x 85cm', indicação: 'Até 23 kg', imagens: ['/Imagens/cadeira.png'] },
        { id: 5, nome: 'Macacão Tricot', preco: 'R$ 111,90', cor: 'Marinho', marca: 'Keko Baby', tamanho: 'RN', indicação: '0 - 6 meses', imagens: ['/Imagens/macacao.png'] },
        { id: 6, nome: 'Algodão Quadrado', preco: 'R$ 8,90', cor: 'Branco', marca: 'Sussex', tamanho: '95g', indicação: 'Pode ser usado tanto para limpar as crianças como na limpeza de pele e remoção de maquiagem.', imagens: ['/Imagens/algodao.png'] },
        { id: 7, nome: 'Sabonete Líquido Recém-Nascido', preco: 'R$ 28,90', cor: '', marca: 'Johnsons', tamanho: '200ml', indicação: 'Dermatologicamente testado, hipoalergênico, indicado desde o primeiro dia de vida.', imagens: ['/Imagens/sabonete.png'] },
        { id: 8, nome: 'Conjunto ABC', preco: 'R$ 87,90', cor: 'Azul Claro', marca: 'Pulla Bulla', tamanho: 'M', indicação: '3 - 12 meses', imagens: ['/Imagens/abc.png'] },
        { id: 9, nome: 'Conjunto Balls', preco: 'R$ 99,90', cor: 'Cru', marca: 'Keko Baby', tamanho: '1', indicação: '1 - 3 anos', imagens: ['/Imagens/balls.png'] },
        { id: 10, nome: 'Vestido Pássaros e Flores', preco: 'R$ 103,90', cor: 'Rosa', marca: 'Pulla Bulla', tamanho: '4', indicação: '4 - 12 anos', imagens: ['/Imagens/vestido.png'] },
        { id: 11, nome: 'Meia Festa Doçura', preco: 'R$ 13,90', cor: 'Branco', marca: 'Brando/azul', tamanho: 'PP', indicação: '1 - 2 anos', imagens: ['/Imagens/meia.png'] },
        { id: 12, nome: 'Macaquinho Suspensório', preco: 'R$ 107,90', cor: 'Branco', marca: 'Keko Baby', tamanho: 'M', indicação: '3 - 12 meses', imagens: ['/Imagens/macaquinho.png'] },
        { id: 13, nome: 'Vestido Cotton Doçura', preco: 'R$ 76,90', cor: 'Marinho', marca: 'Hrradinhos', tamanho: '2', indicação: '2 - 8 anos', imagens: ['/Imagens/vestido2.png'] },
        { id: 14, nome: 'Macaquinho Listrado', preco: 'R$ 99,90', cor: 'Cru', marca: 'Keko Baby', tamanho: 'M', indicação: '3 - 12 meses', imagens: ['/Imagens/mlistrado.png'] },
        { id: 15, nome: 'Conjunto Nautical Crew', preco: 'R$ 89,90', cor: 'Amarelo', marca: 'Pulla Bulla', tamanho: '1', indicação: '1 - 3 anos', imagens: ['/Imagens/conjunto.png'] }
    ]);

    return (
        <>
            <Header />
            <div className="cabecalho">
                <h1>Produtos</h1>
            </div>
            <ListarProdutos produtos={produtos} />
            <Footer />
        </>
    );
}
