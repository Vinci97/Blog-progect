import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/ComeFare.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory";
const ComeFare = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.ComeFare}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <h1 className={styles.titolo}>Come Fare</h1>
            <ArticlesByCategory category="comefare" />
            </div>
            <Footer/>
        </div>
    )
}
export default ComeFare