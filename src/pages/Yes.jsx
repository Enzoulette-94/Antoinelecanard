import { useMemo } from 'react'

export default function Yes() {
  const hearts = useMemo(() => {
    return Array.from({ length: 45 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
      size: 16 + Math.random() * 22
    }))
  }, [])

  const confettis = useMemo(() => {
    const colors = ['#ff2e93', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#ffffff']
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3,
      size: 8 + Math.random() * 10,
      rotate: Math.random() * 360,
      color: colors[i % colors.length]
    }))
  }, [])

  return (
    <main className="page yes-page">
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

      <div className="confetti-layer" aria-hidden>
        {confettis.map((item) => (
          <span
            key={item.id}
            className="confetti"
            style={{
              left: `${item.left}%`,
              width: `${item.size}px`,
              height: `${item.size * 0.55}px`,
              backgroundColor: item.color,
              transform: `rotate(${item.rotate}deg)`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`
            }}
          />
        ))}
      </div>

      <section className="card yes-card">
        <p>rdv samedi beauté divine</p>
        <img
          className="yes-image"
          src={`${import.meta.env.BASE_URL}public/FullSizeRender-preview.jpg`}
          alt="Photo Valentine"
        />
        <p>tu viens d'acceder au bohneur</p>
      </section>
    </main>
  )
}
