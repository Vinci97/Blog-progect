import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/OpenDiritto.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory"
import Head from "next/head"
const OpenDiritto = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.OpenDiritto}>
            <Head>
                <title>MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="MicheleVacca.it" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.il-blog-di-michele-vacca.it" />
                <meta property="og:image" content="/ico/Michele.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MicheleVacca.it" />
                <meta name="twitter:image" content="/ico/Michele.ico" />
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "url": "https://www.il-blog-di-michele-vacca.it",
                      "logo": "/ico/Michele.ico",
                      "name": "MicheleVacca.it"
                    }
                  `}
                </script>
            </Head>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.ContTitolo}>
               <div className={styles.line1}><div className={styles.line2}></div></div> 
               <h1 className={styles.titolo}>Open Diritto</h1>
            </div>

            
            <ArticlesByCategory category="opendiritto" />
            </div>
            <Footer/>
        </div>
    )
}
export default OpenDiritto