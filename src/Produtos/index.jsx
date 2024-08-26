import React from "react";
import React from "../Components/ListarProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([
        { id:1, nome:'Carrinho Rock', preco:'R$ 499,00', cor:'Grey Ice', marca:'Infanti', tamanho:'103 x 47 x 65 cm', indicação:'0-15 kg'},
        { id:2, nome:'Poltrona Amamentação Cláudia com Balanço', preco:'R$ 1.599,20', cor:'Cinza', marca:'Gariani', tamanho:'106cm x 72cm x 88cm', indicação:'Melhora a postura e reduz a tensão no corpo da mãe.'},
        { id:3, nome:'Berço Portátil Iora Air', preco:'R$ 2.199,00', cor:'Beyond Graphite', marca:'Maxi Cosi', tamanho:'85cm x 96cm x 55cm', indicação:' 0 à 9kg'},
        { id:4, nome:'Cadeira Alta', preco:'R$ 479,00', cor:'Rose', marca:'Galzerano', tamanho:'103cm x 69cm x 85cm', indicação:'Até 23 kg'},
        { id:5, nome:'Macacão Tricot', preco:'R$ 111,90', cor:'Marinho', marca:'Keko Baby', tamanho:'RN', indicação:'0 - 6 meses'},
        { id:6, nome:'Algodão Quadrado', preco:'R$ 8,90', cor:'Branco', marca:'Sussex', tamanho:'95g', indicação:'Pode ser usado tanto para limpar as crianças como na limpeza de pele e remoção de maquiagem.'},
        { id:7, nome:'Sabonete Líquido Recém-Nascido', preco:'R$ 28,90', cor:'', marca:'Johnsons', tamanho:'200ml', indicação:'Dermatologicamente testado, hipoalergênico, indicado desde o primeiro dia de vida.'},
        { id:8, nome:'Conjunto ABC', preco:'R$ 87,90', cor:'Cru', marca:'Pulla Bulla', tamanho:'M', indicação:'3 - 12 meses'},
        { id:9, nome:'Conjunto Balls', preco:'R$ 99,90', cor:'Cru', marca:'Keko Baby', tamanho:'1', indicação:'1 - 3 anos'},
        { id:10, nome:'Vestido Pássaros e Flores', preco:'R$ 103,90', cor:'Rosa', marca:'Pulla Bulla', tamanho:'4', indicação:'4 - 12 anos'},
        { id:11, nome:'', preco:'R$ ', cor:'', marca:'', tamanho:'', indicação:''},
        { id:12, nome:'', preco:'R$ ', cor:'', marca:'', tamanho:'', indicação:''},
        { id:13, nome:'', preco:'R$ ', cor:'', marca:'', tamanho:'', indicação:''},
        { id:14, nome:'', preco:'R$ ', cor:'', marca:'', tamanho:'', indicação:''},
        { id:15, nome:'', preco:'R$ ', cor:'', marca:'', tamanho:'', indicação:''}
    ]);
}