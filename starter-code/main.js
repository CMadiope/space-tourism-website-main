const crewNav = document.querySelector('.crew-nav') 

const dots = document.getElementsByClassName('dot')

for (let i =0; i < dots.length; i ++) {
  dots[i].addEventListener('click', function() {
    let current = document.getElementsByName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += 'active'
  })
}

// home page 
function responseHome() {
  const header = document.getElementById('header')
  if (header.className === 'topnav') {
    header.className += 'responsive'
  }
}