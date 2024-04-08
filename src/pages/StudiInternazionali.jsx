import Hero from "@/components/Hero"
import styles from "../styles/StudInter.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import Navbar from "@/components/navbar"
const StudInter = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.StudInter}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <h1 className={styles.titolo}>STUDI INTERNAZIONALI</h1>
            <Footer/>
        </div>
    )
}
export default StudInter