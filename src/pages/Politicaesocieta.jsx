import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useEffect, useState } from "react"
import fetchData from '../utils/fetchData';
import styles from "../styles/Politicaesocieta.module.scss"
import Navbar from "@/components/navbar"
import Notizie from "@/components/notizie"
const Politicaesocieta = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
          const allArticles = await fetchData();
          const filteredArticles = allArticles.filter(article => article.category === 'politica');
          setArticles(filteredArticles);
        };
    
        getArticles();
      }, []);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Politicaesocieta}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <h1 className={styles.titolo}>Politica e Soceta</h1>
            <Notizie articles={articles} />
            <Footer/>
        </div>
    )
}
export default Politicaesocieta