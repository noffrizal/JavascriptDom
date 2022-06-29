// DOM Selection

// getElementById -> Element
const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Noffrizal Zaim';

// getElementsByTagName -> HTMLcollection
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue'; 
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '100px';

// getElementsByClassName -> HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini Saya Lho ya.. ';