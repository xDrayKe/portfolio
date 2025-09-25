import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/Projects.css'

const projects = [
    {
        id: 1,
        title: 'Portfolio personnel',
        description: 'Site portfolio personnel pour présenter mes projets et compétences.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
        technologies: ['React', 'CSS3', 'Vite', 'Javascript'],
        category: 'frontend',
        github: 'https://github.com',
        demo: 'https://demo.com',
        status: "En cours",
        featured: true
    },
    {
        id: 2,
        title: 'Dashboard RP',
        description: 'Plateforme centralisée et évolutive permettant de regrouper et gérer l\'ensemble des éléments liés à l\'entreprise: liste des employés, suivi des heures effectuées, gestion des primes etc.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
        technologies: ['JavaScript', 'API', 'Chart.js'],
        category: 'frontend',
        github: 'https://github.com',
        demo: 'https://demo.com',
        status: "En cours",
        featured: false
    },
    {
        id: 3,
        title: 'REST API Backend',
        description: 'Test d\'une API REST en Go pour la gestion des animaux.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop',
        technologies: ['Goland', 'Chi', 'GORM ', 'SQLite '],
        category: 'backend',
        github: 'https://https://github.com/xDrayKe/animal-api-go.com',
        demo: 'https://demo.com',
        status: "Terminé",
        featured: false
    },
    {
        id: 4,
        title: 'Systeme solaire 3D',
        description: 'Test de visualisation 3D d\'un système solaire avec React et Three.js.',
        image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&h=300&fit=crop',
        technologies: ['Node.js', 'Three.js'],
        category: 'Frontend',
        github: 'https://github.com/xDrayKe/test-planete',
        demo: 'https://demo.com',
        status: "Terminé",
        featured: true
    },
    {
        id: 5,
        title: 'Portfolio personnel',
        description: 'Site portfolio pour mon frère afin de présenter ses projets et compétences.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
        technologies: ['HTML', 'CSS3', 'Javascript'],
        category: 'Frontend',
        github: 'https://github.com/xDrayKe/site-killian',
        demo: 'https://demo.com',
        status: "Terminé",
        featured: true
    }
]

function Projects() {
    useEffect(() => {
        document.title = "Mes projets | Portfolio"
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

        document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const getStatusClass = (status) => {
        return status.toLowerCase().replace(' ', '-')
    }

    return (
        <div className="projects-page">
            <div className="projects-container">
                <header className="projects-header fade-in-element">
                    <h1>Mes projets</h1>
                    <p>Découvrez une sélection de mes réalisations, mettant en avant mes compétences techniques et ma créativité à travers différentes technologies</p>
                </header>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card fade-in-element ${project.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {project.featured && <div className="featured-badge">Featured</div>}
                            <div className={`status-badge ${getStatusClass(project.status)}`}>
                                {project.status}
                            </div>

                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects