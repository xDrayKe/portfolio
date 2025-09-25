import { useEffect } from 'react'

function Resume() {
    useEffect(() => {
        window.location.href = '/cv.pdf'
    }, [])

    return (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h1>Redirection vers le CV...</h1>
            <p>Si la redirection ne fonctionne pas, <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">clique ici pour télécharger le CV</a>.</p>
        </div>
    )
}

export default Resume