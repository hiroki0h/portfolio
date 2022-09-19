import type { NextPage } from 'next'
import Button from '../components/button/Button';
import Header from '../components/Header';
import Section from '../components/section';
import Footer from '../components/Footer';

const Home: NextPage = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };
    return (
    <div id="wrapper">
        <Header/>
        <Section/>
        <Footer/>
        <Button size="small" action="top" label="TOP" onClick={scrollToTop}/>
    </div>
    )
}

export default Home
