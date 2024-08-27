import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <>
        <header>
            <h1>Loja do Neném</h1>
        </header>
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/produtos">
                    <li>Produtos</li>
                </Link>
                <Link to="/oferta">
                    <li>Oferta</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}