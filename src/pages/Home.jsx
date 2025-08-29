import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/Home.css'

function Home() {
    useEffect(() => {
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
                    <h1 className="hero-title">Transformer une idée en réalité avec de la patience</h1>
                    <p className="hero-description">
                        Développeur full-stack passionné, je veux mettre mes compétences au service d’entreprises en quête de nouveaux talents.
                    </p>
                    <div className="cta-buttons">
                        <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            CV <i className="fas fa-external-link-alt"></i>
                        </a>
                        <a href="/contact" className="btn btn-secondary">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home