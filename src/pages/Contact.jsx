import { useEffect } from 'react'
import '../styles/global.css'
import '../styles/Contact.css'

function Contact() {
    useEffect(() => {
        document.title = "Contact | Portfolio"

        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                    observer.unobserve(entry.target)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()

        const subject = encodeURIComponent(`Contact portfolio - ${name || 'Nouveau message'}`)
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)
        // Ouvre le client mail par défaut (fallback simple)
        window.location.href = `mailto:galaad.dossantos.pro@gmail.com?subject=${subject}&body=${body}`
    }

    return (
        <div className="contact-page">
            <div className="contact-container">
                <header className="projects-header fade-in-element">
                    <h1>Contactez-moi</h1>
                    <p>Une question, une opportunité ou envie de collaborer ? Envoyez-moi un message — je réponds rapidement.</p>
                </header>

                <section className="contact-grid fade-in-element">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            <span>Nom</span>
                            <input type="text" name="name" placeholder="Votre nom" required />
                        </label>

                        <label>
                            <span>Email</span>
                            <input type="email" name="email" placeholder="votre@email.com" required />
                        </label>

                        <label>
                            <span>Message</span>
                            <textarea name="message" rows="6" placeholder="Décrivez votre demande..." required></textarea>
                        </label>

                        <div className="contact-actions">
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                            <a className="btn btn-secondary" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                        </div>
                    </form>

                    <aside className="contact-info">
                        <div className="card">
                            <h3>Adresse</h3>
                            <p>Nantes, France</p>
                        </div>

                        <div className="card">
                            <h3>Email</h3>
                            <p><a href="mailto:galaad.dossantos.pro@gmail.com">galaad.dossantos.pro@gmail.com</a></p>
                        </div>

                        <div className="card">
                            <h3>Téléphone</h3>
                            <p>07 83 39 78 52</p>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default Contact