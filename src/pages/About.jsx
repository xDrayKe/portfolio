import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/About.css'

function About() {
    useEffect(() => {
        document.title = "A propos | Portfolio"
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
        // Langages de programmation
        { name: 'JavaScript', level: 'Avancé', icon: 'fab fa-js-square', category: 'langage' },
        { name: 'HTML/CSS', level: 'Avancé', icon: 'fas fa-code', category: 'langage' },
        { name: 'Typescript', level: 'Intermédiaire', icon: 'fab fa-js', category: 'langage' },
        { name: 'Java', level: 'Intermédiaire', icon: 'fab fa-java', category: 'langage' },
        { name: 'Python', level: 'Débutant', icon: 'fab fa-python', category: 'langage' },
        { name: 'PHP', level: 'Débutant', icon: 'fab fa-php', category: 'langage' },

        // Frameworks & Libraries
        { name: 'React.js', level: 'Avancé', icon: 'fab fa-react', category: 'framework' },
        { name: 'Tailwind CSS', level: 'Avancé', icon: 'fa fa-css3', category: 'framework' },
        { name: 'Node.js', level: 'Intermédiaire', icon: 'fab fa-node-js', category: 'framework' },
        { name: 'Express.js', level: 'Intermédiaire', icon: 'fab fa-node-js', category: 'framework' },
        { name: 'Bootstrap', level: 'Intermédiaire', icon: 'fab fa-bootstrap', category: 'framework' },

        // Outils
        { name: 'VS Code', level: 'Avancé', icon: 'fas fa-code', category: 'outil' },
        { name: 'Postman', level: 'Avancé', icon: 'fas fa-paper-plane', category: 'outil' },
        { name: 'Git', level: 'Intermédiaire', icon: 'fab fa-git-alt', category: 'outil' },
        { name: 'Linux', level: 'Intermédiaire', icon: 'fab fa-linux', category: 'outil' },
        { name: 'Docker', level: 'Débutant', icon: 'fab fa-docker', category: 'outil' },
        { name: 'Azure', level: 'Débutant', icon: 'fab fa-microsoft', category: 'outil' },

        // Bases de données
        { name: 'MariaDB', level: 'Avancé', icon: 'fas fa-database', category: 'database' },
        { name: 'SQLite', level: 'Avancé', icon: 'fas fa-database', category: 'database' },
        { name: 'PostgreSQL', level: 'Avancé', icon: 'fas fa-database', category: 'database' },
        { name: 'MongoDB', level: 'Intermédiaire', icon: 'fas fa-database', category: 'database' },
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
            description: 'Réparer et finaliser d\'une application web en PHP/ MySQL avec création et préparater une version amélioré.'
        }
    ]

    return (
        <div className="about-page">
            <div className="about-container">

                <section className="about-intro fade-in-element">
                    <div className="intro-content">
                        <h2>Salut ! Moi c'est Galaad.</h2>
                        <p>
                            Je suis un jeune développeur passionné, animé par l'envie d'apprendre en réalisant des projets
                            concrets. Chaque nouvelle expérience est pour moi une occasion d'élargir mes compétences et
                            d'approfondir ma compréhension du développement.
                        </p>
                        <p>
                            Mon objectif actuel est de progresser pas à pas vers le domaine du DevOps. J'accorde une grande
                            importance à l'apprentissage continu, à l'expérimentation et au partage de connaissances avec
                            la communauté afin de devenir un meilleur développeur chaque jour.
                        </p>
                        <p> Actuellement, mon but est d'apprendre de nouvelles compétences pour pouvoir prétendre à un futur poste de DevOps</p>
                    </div>
                </section>

                <section className="skills-section fade-in-element">
                    <h2>Compétences - Technologies</h2>

                    <div className="skills-categories-grid">
                        {/* Langages de programmation */}
                        <div className="category-box">
                            <h3 className="category-title">Langages</h3>
                            <div className="category-skills">
                                {skills.filter(s => s.category === 'langage').map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <i className={skill.icon}></i>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <span className={`skill-badge skill-badge-${skill.level.toLowerCase()}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div className="category-box">
                            <h3 className="category-title">Frameworks</h3>
                            <div className="category-skills">
                                {skills.filter(s => s.category === 'framework').map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <i className={skill.icon}></i>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <span className={`skill-badge skill-badge-${skill.level.toLowerCase()}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bases de données */}
                        <div className="category-box">
                            <h3 className="category-title">Bases de données</h3>
                            <div className="category-skills">
                                {skills.filter(s => s.category === 'database').map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <i className={skill.icon}></i>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <span className={`skill-badge skill-badge-${skill.level.toLowerCase()}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outils */}
                        <div className="category-box">
                            <h3 className="category-title">Outils</h3>
                            <div className="category-skills">
                                {skills.filter(s => s.category === 'outil').map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <i className={skill.icon}></i>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <span className={`skill-badge skill-badge-${skill.level.toLowerCase()}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="experience-section fade-in-element">
                    <h2>Expérience proffesionnel dans l'informatique </h2>
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
                    <h2>Mes inspirations</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <i className="fas fa-code"></i>
                            <h3>Code de Qualité</h3>
                            <p>Écrire un code clair, lisible et durable pour faciliter la maintenance</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-users"></i>
                            <h3>Esprit d'Équipe</h3>
                            <p>Collaborer efficacement pour créer un résultat plus fort et plus complet</p>
                        </div>
                        <div className="value-card">
                            <i className="fas fa-lightbulb"></i>
                            <h3>Innovation</h3>
                            <p>Adopter de nouvelles technologies et méthodes pour résoudre les défis</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About