import { useState } from "react"
import Hero from "../Hero"
import Footer from "../footer"
import Header from "../header"
import styles from "./leyout.module.scss"
import Navbar from "../navbar"
const Layout =()=>{
    const [menuAperto, setMenuAperto] = useState(false);
    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.layout}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <Footer/>
        </div>
    )
}
export default Layout