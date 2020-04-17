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
  let colors =['#f64c72', '#5cdb95', '#edf5e1', '#fc445', '#3feee6', '#97caef','#cafafe', '#8ee4af0', '#5cdb95', '#3500d3', '#950740', '#c3073f', '#e7717D','#c2cad0', '##c2b9b0', '#afd275', '#66fcf1', '#e3e2df','#e3afbc', '#ee4c7c','#d79922', '#ef2ba', '#f13c20', '#ff652f', '#ffe400', '#14a76c']

  let index = Math.floor(Math.random() * colors.length)
  
  return colors[index]    
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