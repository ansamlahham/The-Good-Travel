'use strict';

let allPlaces = [];
function place(image,placeName , tripPlace, transport) {
    this.placeName = placeName;
    this.tripPlace=tripPlace;
    this.transport=transport;
    this.image=image;
    allPlaces.push(this);
}

let images = ['../img/HAWAII.jpg', '../img/ITALY.png' , '../img/LONDON.png','../img/MALAYSIA.png' ,'../img/PARIS.png' , '../img/SLOVAKIA.png'];

let form = document.getElementById('placeForm');

let table = document.getElementById('table');

form.addEventListener('submit',submitter);

function submitter(event) {
    event.preventDefualt();
    let placeName=event.target.placeName.value;
    let image=event.target.image.value;
    let tripPlace=event.target.tripPlace.value;
    let transport=event.target.transport.value;
    let currentplace = new place(image , placeName , tripPlace, transport);
// createTable();
}
// console.log(submitter);

function createTable() {


for (let i = 0; i< images.length; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.textContent=images[i];

    // let tr1 = document.createElement('tr');
    // table.appendChild(tr1);
    // tr1.textContent=allPlaces[i];

    

    // let th3 = document.createElement('th');
    // tr.appendChild(th3);
    // th3.textContent=images[i];

    // let th4 = document.createElement('th');
    // tr.appendChild(th4);
    // th4.textContent=images[i];
}
   

}
createTable();

function render() {
    let tr = document.createElement('tr');
    table.appendChild(tr);
  

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent=this.placeName;

    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent=this.tripPlace;

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent=this.transport;
}
// render();

function setData() {
    let data = JSON.stringify(allPlaces);
    localStorage.setItem(data,'data');
}



