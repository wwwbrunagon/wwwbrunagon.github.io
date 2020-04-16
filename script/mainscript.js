//tabpanel
const tabClick = ({ target }) => {
    const { dataset: {id = '' }} = target;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'));
    target.classList.add('selected');
    document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
    document.querySelector(`#${id}`).classList.remove('hidden');
};

const bindTabs = () => {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', tabClick);
  })
};

document.addEventListener('DOMContentLoaded', () => {
  bindTabs();
});



//skills progressbar
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
function createProgressBar(percentage, containerDiv) {   
    const percentage_p = document.createElement("p") 
    percentage_p.textContent = percentage + "%"    
    containerDiv.appendChild(percentage_p)  
  
    const progressBar = document.createElement("div")
     
    progressBar.style.backgroundColor = getRandomColor()
    progressBar.style.width = percentage + "%"    
    containerDiv.appendChild(progressBar)
  }
  
  const progress = document.querySelectorAll(".progressbar") 
  for (const div of progress) { 
    const percentage = div.dataset.percentage
    createProgressBar(percentage, div)
  }


//particles
let particles = Particles.init({
  selector: '.background',
  color: ['#474b4f', '#404B69'],
  connectParticles: true,
  responsive: [{
    breakpoint: 800,
    options: {
      color: '#00C9B1',
      maxParticles: 80,
      connectParticles: false
    }
  }]
});