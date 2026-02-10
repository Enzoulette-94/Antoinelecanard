import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SONG_URL =
  'https://www.youtube.com/watch?v=V_o05vQEpQE&list=RDV_o05vQEpQE&start_radio=1'

export default function Home() {
  const navigate = useNavigate()
  const noButtonRef = useRef(null)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [isEscaping, setIsEscaping] = useState(false)

  const hearts = useMemo(() => {
    return Array.from({ length: 45 }, (_, index) => {
      return {
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
        size: 16 + Math.random() * 22
      }
    })
  }, [])

  const moveNoButton = () => {
    const noButton = noButtonRef.current

    if (!noButton) return

    if (!isEscaping) {
      setIsEscaping(true)
    }

    const buttonRect = noButton.getBoundingClientRect()
    const maxX = Math.max(0, window.innerWidth - buttonRect.width - 8)
    const maxY = Math.max(0, window.innerHeight - buttonRect.height - 8)

    setNoPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    })
  }

  const handleMouseMove = (event) => {
    const noButton = noButtonRef.current
    if (!noButton) return

    const rect = noButton.getBoundingClientRect()
    const distanceX = Math.abs(event.clientX - (rect.left + rect.width / 2))
    const distanceY = Math.abs(event.clientY - (rect.top + rect.height / 2))

    if (distanceX < 90 && distanceY < 60) {
      moveNoButton()
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (isEscaping) moveNoButton()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isEscaping])

  return (
    <main className="page home-page" onMouseMove={handleMouseMove}>
      <div className="heart-layer" aria-hidden>
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`
            }}
          >
            ❤
          </span>
        ))}
      </div>

      <section className="card">
        <h1>
          veux tu etre ma valentine pour le 14 février et passer le moment le plus romantique de
          notre existence?
        </h1>

        <div className="buttons">
          <button
            ref={noButtonRef}
            className={`btn btn-no ${isEscaping ? 'btn-no-escaping' : ''}`}
            style={isEscaping ? { left: `${noPosition.x}px`, top: `${noPosition.y}px` } : undefined}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onMouseDown={moveNoButton}
            type="button"
          >
            NON
          </button>

          <button className="btn btn-yes" type="button" onClick={() => navigate('/oui')}>
            OUI
          </button>
        </div>

        <a className="song-link" href={SONG_URL} target="_blank" rel="noopener noreferrer">
          une chanson pour te mettre dans l'ambiance
        </a>
      </section>
    </main>
  )
}
