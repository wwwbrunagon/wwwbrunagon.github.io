
//particles
let particles = Particles.init({
    selector: '.background',
    color: ['#5a5560', '#404B69'],
    connectParticles: false,
    responsive: [{
      breakpoint: 800,
      options: {
        color: '#9d8d8f',
        maxParticles: 80,
        connectParticles: false
      }
    }]
  });