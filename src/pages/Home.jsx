import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/Home.css'

function Home() {
    useEffect(() => {
        document.title = "Acceuil | Portfolio"
        // Animation d'entrée progressive
        const elements = document.querySelectorAll('.hero-title, .hero-description, .cta-buttons, .hero-image')
        elements.forEach((el, index) => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(30px)'
            el.style.transition = 'all 0.8s ease'

            setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
            }, index * 200 + 300)
        })

        // Effet de parallax léger
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const parallax = document.querySelector('.watercolor-effect')
            if (parallax) {
                const speed = scrolled * 0.1
                parallax.style.transform = `translateY(${speed}px)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="home-page">
            <div className="home-container">
                <div className="hero-image">
                    <div className="watercolor-effect"></div>
                    <img className="hero" src="hero.png" alt="" />
                </div>

                <div className="hero-content">
                    <div className="hero-title">Développeur</div>
                    <p className="hero-description">
                        Spécialisé en React.js et Node.js, je crée des applications web performantes et évolutives.
                        Mon objectif : allier développement et DevOps pour des solutions robustes et innovantes.
                    </p>
                    <div className="cta-buttons">
                        <a href="/projects" className="btn btn-primary">
                            Voir mes projets <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="/resume" className="btn btn-secondary" target="_blank">
                            Télécharger mon CV <i className="fas fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home