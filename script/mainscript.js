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

//about langs
document.getElementById("brflag-about").onclick = function() {   
  document.getElementById("portuguese-about").style.display = "block"; 
  document.getElementById("english-about").style.display = "none"; 
  console.log('ptbr')
}

document.getElementById("usaflag-about").onclick = function() {   
  document.getElementById("portuguese-about").style.display = "none"; 
  document.getElementById("english-about").style.display = "block"; 
  console.log('eng')
}

//xp langs
document.getElementById("brflag").onclick = function() {   
  document.getElementById("portuguese-xp").style.display = "block"; 
  document.getElementById("english-xp").style.display = "none"; 
}

document.getElementById("usaflag").onclick = function() {   
  document.getElementById("portuguese-xp").style.display = "none"; 
  document.getElementById("english-xp").style.display = "block"; 
}

//skill-barometer
function getRandomColor() {
  let colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

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

  //tootltip 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


