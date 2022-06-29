// querySelector -> element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)'); 
li2.style.backgroundColor = 'orange';



// querySelectorAll
const p = document.querySelectorAll('p');
p[3].innerHTML='oke deh';

// mengubah nodeRoot

const sectionB = document.getElementById('b');
const p3 = sectionB.querySelector('p');