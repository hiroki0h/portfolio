import Link from 'next/link';
import data from '../public/portfolio-text.json';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <ul className="nav">
                    {data.title.map((link, i:number) => (
                        <li key={i}>
                            <Link href={`#section${i}`}>
                                <a>{link}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;