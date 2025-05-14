document.addEventListener("DOMContentLoaded", () => {
    // Configuración de particles.js para un efecto de galaxia
    // Asegúrate de que particlesJS esté disponible globalmente o importado correctamente.
    // Si estás usando un CDN, esto podría no ser necesario.
    // Si estás usando un gestor de paquetes como npm, asegúrate de importarlo:
    // import particlesJS from 'particles.js';
  
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#ffffff", "#9370DB", "#8A2BE2", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#BA55D3"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#4B0082",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.4,
            },
          },
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  
    // Crear nebulosas para efecto de galaxia
    const createNebula = () => {
      const nebula = document.createElement("div")
      nebula.classList.add("nebula")
  
      // Colores de nebulosa
      const colors = [
        "rgba(75, 0, 130, 0.3)", // Índigo
        "rgba(138, 43, 226, 0.3)", // Violeta
        "rgba(123, 104, 238, 0.3)", // Azul-violeta
        "rgba(106, 90, 205, 0.3)", // Azul-púrpura
        "rgba(72, 61, 139, 0.3)", // Azul oscuro
      ]
  
      // Tamaño aleatorio grande
      const size = 100 + Math.random() * 200
  
      // Posición aleatoria
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
  
      nebula.style.width = `${size}px`
      nebula.style.height = `${size}px`
      nebula.style.left = `${x}px`
      nebula.style.top = `${y}px`
      nebula.style.background = colors[Math.floor(Math.random() * colors.length)]
  
      document.body.appendChild(nebula)
  
      // Eliminar la nebulosa después de un tiempo
      setTimeout(() => {
        nebula.remove()
      }, 15000)
    }
  
    // Crear nebulosas periódicamente
    setInterval(createNebula, 5000)
  
    // Crear algunas nebulosas iniciales
    for (let i = 0; i < 5; i++) {
      createNebula()
    }
  
    // Crear OVNIs adicionales periódicamente
    const createUfo = () => {
      const ufo = document.createElement("div")
      ufo.classList.add("ufo")
  
      // Estructura del OVNI
      const ufoBody = document.createElement("div")
      ufoBody.classList.add("ufo-body")
  
      const ufoDome = document.createElement("div")
      ufoDome.classList.add("ufo-dome")
  
      const ufoLight = document.createElement("div")
      ufoLight.classList.add("ufo-light")
  
      ufo.appendChild(ufoBody)
      ufo.appendChild(ufoDome)
      ufo.appendChild(ufoLight)
  
      // Posición vertical aleatoria
      const y = 10 + Math.random() * 60
      ufo.style.top = `${y}%`
  
      // Velocidad aleatoria
      const duration = 10 + Math.random() * 20
      ufo.style.animation = `flyUfo ${duration}s linear infinite`
  
      document.body.appendChild(ufo)
  
      // Eliminar el OVNI después de un tiempo
      setTimeout(() => {
        ufo.remove()
      }, duration * 1000)
    }
  
    // Crear OVNIs periódicamente
    setInterval(createUfo, 15000)
  
    // Crear algunos OVNIs iniciales
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        createUfo()
      }, i * 5000)
    }
  
    // Efecto de estrellas brillantes adicional
    const createStar = () => {
      const star = document.createElement("div")
      star.classList.add("star")
  
      // Posición aleatoria
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
  
      // Tamaño aleatorio
      const size = Math.random() * 2
  
      // Duración de animación aleatoria
      const duration = 3 + Math.random() * 7
  
      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.animationDuration = `${duration}s`
  
      document.body.appendChild(star)
  
      // Eliminar la estrella después de un tiempo
      setTimeout(() => {
        star.remove()
      }, duration * 1000)
    }
  
    // Crear estrellas periódicamente
    setInterval(createStar, 300)
  })
  