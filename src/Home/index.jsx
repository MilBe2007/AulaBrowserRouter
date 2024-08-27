import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function Home() {
    const [produtos] = useState([
        { id: 1, nome: 'Carrinho Rock', preco: 'R$ 499,00', cor: 'Grey Ice', marca: 'Infanti', tamanho: '103 x 47 x 65 cm', indicação: '0-15 kg' },
        { id: 2, nome: 'Poltrona Amamentação Cláudia com Balanço', preco: 'R$ 1.599,20', cor: 'Cinza', marca: 'Gariani', tamanho: '106cm x 72cm x 88cm', indicação: 'Melhora a postura e reduz a tensão no corpo da mãe.' },
        { id: 3, nome: 'Berço Portátil Iora Air', preco: 'R$ 2.199,00', cor: 'Beyond Graphite', marca: 'Maxi Cosi', tamanho: '85cm x 96cm x 55cm', indicação: '0 à 9kg' },
        { id: 4, nome: 'Cadeira Alta', preco: 'R$ 479,00', cor: 'Rose', marca: 'Galzerano', tamanho: '103cm x 69cm x 85cm', indicação: 'Até 23 kg' },
        { id: 5, nome: 'Macacão Tricot', preco: 'R$ 111,90', cor: 'Marinho', marca: 'Keko Baby', tamanho: 'RN', indicação: '0 - 6 meses' }
    ]);

    return (
        <>
            <Header />
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
                <div>
                    <img src="https://th.bing.com/th/id/OIP.gMYuhTbY88sV7_3ddqonmAHaCS?rs=1&pid=ImgDetMain" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://static.pirulitaskids.com.br/banner/1708619741503-03521396375315595.gif" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://www.lojacarrossel.com.br/cache/1d55081c99da77aee9a4e2b580aa83ce.jpg" alt="Slide 3" />
                </div>
            </Carousel>

            <ListarProdutos produtos={produtos} />
            
            <Footer />
        </>
    );
}
