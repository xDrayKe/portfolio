import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/About.css'

function About() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                }
            })
        }, observerOptions)

        document.querySelectorAll('.fade-in-element').forEach(el => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(30px)'
            el.style.transition = 'all 0.8s ease'
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const skills = [
        { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
        { name: 'React.js', level: 80, icon: 'fab fa-react' },
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },

        { name: 'Python', level: 10, icon: 'fab fa-python' },
        { name: 'Git', level: 50, icon: 'fab fa-git-alt' },
        { name: 'HTML/CSS', level: 80, icon: 'fas fa-code' },

        { name: 'MongoDB', level: 75, icon: 'fas fa-database' },
        { name: 'Mariadb', level: 75, icon: 'fas fa-database' },
        { name: 'SQLite', level: 75, icon: 'fas fa-database' },
    ]

    const experiences = [
        {
            position: 'Developer Full Stack Freelance',
            period: 'Décembre 2024 - Juin 2025',
            description: 'Prestaire sur plusieurs missions de développement full Stack pour des clients variés.'
        },
        {
            company: 'Dixit Facile',
            position: 'Alternant Développeur Full Stack',
            period: 'Sept 2023 - Aout 2024',
            description: 'Réparer et finaliser d’une application web en PHP/MySQL avec création et préparater une version amélioré.'
        }
    ]

    return (
        <div className="about-page">
            <div className="about-container">

                <section className="about-intro fade-in-element">
                    <div className="intro-content">
                        <h2>Salut ! Moi c'est Galaad.</h2>
                        <p>
                            Je suis un jeune développeur passionné, animé par l’envie d’apprendre en réalisant des projets
                            concrets. Chaque nouvelle expérience est pour moi une occasion d’élargir mes compétences et
                            d’approfondir ma compréhension du développement.
                        </p>
                        <p>
                            Mon objectif actuel est de progresser pas à pas vers le domaine du DevOps. J’accorde une grande
                            importance à l’apprentissage continu, à l’expérimentation et au partage de connaissances avec
                            la communauté afin de devenir un meilleur développeur chaque jour.
                        </p>
                        <p> Actuellement, mon but est d'apprendre de nouvelles compétences pour pouvoir prétendre à un futur poste de DevOps</p>
                    </div>
                </section>

                <section className="skills-section fade-in-element">
                    <h2>Compétences - Technologie</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-header">
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-progress"
                                        style={{ '--progress': `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="experience-section fade-in-element">
                    <h2>Professional Experience</h2>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{exp.position}</h3>
                                    <h4>{exp.company}</h4>
                                    <span className="period">{exp.period}</span>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="values-section fade-in-element">
                    <h2>Mes Valeurs</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <i className="fas fa-code"></i>
                            <h3>Code de Qualité</h3>
                            <p>Écrire un code clair, lisible et durable pour faciliter la maintenance</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-users"></i>
                            <h3>Esprit d’Équipe</h3>
                            <p>Collaborer efficacement pour créer un résultat plus fort et plus complet</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-lightbulb"></i>
                            <h3>Innovation</h3>
                            <p>Adopter de nouvelles technologies et méthodes pour résoudre les défis</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-heart"></i>
                            <h3>Centré Utilisateur</h3>
                            <p>Placer l’utilisateur au cœur de chaque choix de conception et de développement</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About