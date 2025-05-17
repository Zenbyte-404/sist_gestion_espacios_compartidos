/* Configuración de partículas estilo NASA/galaxia para todas las páginas */
document.addEventListener("DOMContentLoaded", () => {
    // Configuración de particles.js para un efecto de galaxia avanzado
    // Assuming particlesJS is a global function provided by a library,
    // ensure the library is loaded before this script.
    // If not, you might need to import it or define it.
    // For example, if using a CDN:
    // <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    // Alternatively, if using npm:
    // import particlesJS from 'particles.js'; // Or the correct import path
  
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#ffffff", "#9370DB", "#8A2BE2", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#BA55D3", "#4169E1", "#1E90FF"]
        },
        shape: {
          type: ["circle", "star"],
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4B0082",
          opacity: 0.2,
          width: 1
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
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.4
            }
          },
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  
    // Crear elementos de galaxia adicionales
    createGalaxyElements();
  });
  
  // Función para crear elementos de galaxia
  function createGalaxyElements() {
    // Crear nebulosas
    createNebulas();
    
    // Crear estrellas distantes
    createDistantStars();
    
    // Crear meteoros periódicamente
    setInterval(createMeteor, 8000);
    
    // Crear rayos cósmicos periódicamente
    setInterval(createCosmicRay, 5000);
    
    // Crear supernovas ocasionales
    setInterval(createSupernova, 15000);
    
    // Crear polvo espacial continuamente
    setInterval(createSpaceDust, 1000);
    
    // Crear un agujero negro
    createBlackHole();
    
    // Crear anillos planetarios
    createPlanetRings();
    
    // Crear efecto de velocidad de la luz ocasionalmente
    setInterval(createLightSpeed, 20000);
  }
  
  // Función para crear nebulosas
  function createNebulas() {
    const nebulaTypes = ['nebula-purple', 'nebula-blue', 'nebula-pink', 'nebula-teal'];
    const container = document.body;
    
    for (let i = 0; i < 5; i++) {
      const nebula = document.createElement('div');
      nebula.classList.add('nebula');
      nebula.classList.add(nebulaTypes[Math.floor(Math.random() * nebulaTypes.length)]);
      
      // Tamaño aleatorio grande
      const size = 150 + Math.random() * 300;
      
      // Posición aleatoria
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.left = `${x}px`;
      nebula.style.top = `${y}px`;
      
      // Animación de pulso
      nebula.style.animation = `nebulaPulse ${8 + Math.random() * 7}s ease-in-out infinite alternate`;
      
      container.appendChild(nebula);
    }
  }
  
  // Función para crear estrellas distantes
  function createDistantStars() {
    const container = document.body;
    
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('distant-star');
      
      // Posición aleatoria
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      // Profundidad aleatoria
      star.style.animationDelay = `${Math.random() * 20}s`;
      
      container.appendChild(star);
    }
  }
  
  // Función para crear meteoros
  function createMeteor() {
    const container = document.body;
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    
    // Posición inicial aleatoria en la parte superior
    const x = Math.random() * window.innerWidth;
    
    meteor.style.left = `${x}px`;
    meteor.style.top = '0';
    
    // Ángulo aleatorio
    const angle = 35 + Math.random() * 20;
    meteor.style.transform = `rotate(${angle}deg)`;
    
    // Duración aleatoria
    const duration = 1 + Math.random() * 3;
    meteor.style.animation = `meteor ${duration}s linear 1`;
    
    container.appendChild(meteor);
    
    // Eliminar después de la animación
    setTimeout(() => {
      meteor.remove();
    }, duration * 1000);
  }
  
  // Función para crear rayos cósmicos
  function createCosmicRay() {
    const container = document.body;
    const ray = document.createElement('div');
    ray.classList.add('cosmic-ray');
    
    // Posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    ray.style.left = `${x}px`;
    ray.style.top = `${y}px`;
    
    // Ángulo aleatorio
    const angle = Math.random() * 360;
    ray.style.transform = `rotate(${angle}deg)`;
    
    // Duración aleatoria
    const duration = 2 + Math.random() * 4;
    ray.style.animation = `cosmicRay ${duration}s linear 1`;
    
    container.appendChild(ray);
    
    // Eliminar después de la animación
    setTimeout(() => {
      ray.remove();
    }, duration * 1000);
  }
  
  // Función para crear supernovas
  function createSupernova() {
    const container = document.body;
    const supernova = document.createElement('div');
    supernova.classList.add('supernova');
    
    // Posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    supernova.style.left = `${x}px`;
    supernova.style.top = `${y}px`;
    
    // Duración aleatoria
    const duration = 5 + Math.random() * 5;
    supernova.style.animation = `supernovaExplosion ${duration}s ease-out 1`;
    
    container.appendChild(supernova);
    
    // Eliminar después de la animación
    setTimeout(() => {
      supernova.remove();
    }, duration * 1000);
  }
  
  // Función para crear polvo espacial
  function createSpaceDust() {
    const container = document.body;
    const dust = document.createElement('div');
    dust.classList.add('space-dust');
    
    // Posición aleatoria en la parte superior
    const x = Math.random() * window.innerWidth;
    
    dust.style.left = `${x}px`;
    dust.style.top = '-5px';
    
    // Duración aleatoria
    const duration = 20 + Math.random() * 20;
    dust.style.animation = `spaceDust ${duration}s linear 1`;
    
    container.appendChild(dust);
    
    // Eliminar después de la animación
    setTimeout(() => {
      dust.remove();
    }, duration * 1000);
  }
  
  // Función para crear un agujero negro
  function createBlackHole() {
    const container = document.body;
    const blackHole = document.createElement('div');
    blackHole.classList.add('black-hole');
    
    // Posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    blackHole.style.left = `${x}px`;
    blackHole.style.top = `${y}px`;
    
    container.appendChild(blackHole);
  }
  
  // Función para crear anillos planetarios
  function createPlanetRings() {
    const container = document.body;
    const rings = document.createElement('div');
    rings.classList.add('planet-rings');
    
    // Posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    rings.style.left = `${x}px`;
    rings.style.top = `${y}px`;
    
    container.appendChild(rings);
  }
  
  // Función para crear efecto de velocidad de la luz
  function createLightSpeed() {
    const container = document.body;
    const lightSpeed = document.createElement('div');
    lightSpeed.classList.add('light-speed');
    
    container.appendChild(lightSpeed);
    
    // Eliminar después de la animación
    setTimeout(() => {
      lightSpeed.remove();
    }, 10000);
  }