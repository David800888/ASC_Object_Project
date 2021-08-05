/* In Part 2 we will create a form that will allow the user to create a new
 * superhero to add to our list. You can do this!
 */

// 1. Create a form that has an input for the hero's name, secret identity,
// powers, team, and their saying. Give the form a button that says "Add Hero" and append it to the #form-box div


let origin = document.querySelector('#form-box');
let divhero = document.createElement("div");

let labelhero = document.createElement("label");
labelhero.innerHTML = "Name:";
let heroinput = document.createElement("input");

let labelhero2 = document.createElement("label");
labelhero2.innerHTML = "Secret Identity:";
let heroinput2 = document.createElement("input");


let labelhero3 = document.createElement("label");
labelhero3.innerHTML = "power:";
let heroinput3 = document.createElement("input");


let labelhero4 = document.createElement("label");
labelhero4.innerHTML = "Superhero team:";
let heroinput4 = document.createElement("input");


let labelhero5 = document.createElement("label");
labelhero5.innerHTML = "saying:";
let heroinput5 = document.createElement("input");


let Addhero = document.createElement("button");
Addhero.innerHTML = "CLICK HERE TO ADD A HERO"

// 2. Add an event listener to the form's button that checks for a click, then
// calls a function called "addHero."



divhero.appendChild(labelhero);
divhero.appendChild(heroinput);
divhero.appendChild(labelhero2);
divhero.appendChild(heroinput2);
divhero.appendChild(labelhero3);
divhero.appendChild(heroinput3);
divhero.appendChild(labelhero4);
divhero.appendChild(heroinput4);
divhero.appendChild(labelhero5);
divhero.appendChild(heroinput5);


Addhero.addEventListener('click',addhero);
 function addhero(event) 
 {
     event.preventDefault();
     let UHeroName = heroinput.value;
     let UHerosecrett = heroinput2.value;
     let UHeropower = heroinput3.value;
     let UHeroteam = heroinput4.value;
     let UHeroword = heroinput5.value;


     let div = document.createElement("div");
     let Acess = document.querySelector('#form-box');

     let ht = document.createElement("h2");
     ht.innerHTML = UHeroName;

     let pt2 = document.createElement("p");
     pt2.innerHTML = "Team Name: "+UHeroteam;

     let pt = document.createElement("p");
     pt.innerHTML = "Secret Identity: "+UHerosecrett;
     
     let ul = document.createElement("ul");
     let h3 = document.createElement("h3");
     h3.innerHTML = "Powers:";
     ul.appendChild(h3)
     
     let list0 = document.createElement("li");
     list0.innerHTML = UHeropower;
     
     let saying = document.createElement("p");
     saying.innerHTML = "Hero Saying: "+ UHeroword;
     
     div.appendChild(ht);
     div.appendChild(pt2);
     div.appendChild(pt);

     div.appendChild(ul);

     div.appendChild(list0);
     div.appendChild(saying);
     Acess.appendChild(div);
 }
 
 origin.appendChild(divhero);
 origin.appendChild(Addhero);


/* 3. Modify the addHero function so that it creates an object using the values
 * in the form, then adds it to the hero array created in part1. Here is a reminder of
 * what our hero objects from part 1 looked like:
 *
 * {
 * name: "Nobody Man",
 * secretIdentity: "Bob Fakeman",
 * powers: ['invisibility', 'can erase your memory of him'],
 * team: 'The Randos',
 * saying: "You don't know me!",
 * }
 *
 * After the addHero function adds our new hero to the array, rewrite the
 * contents of the #hero-list div so that it includes the hero that's been just
 * added
 */

function addHero() {

}

// Part 2 complete!

/* Bonus Ideas:
 * Add images for your heroes
 * style up the page so it looks puuuuurty
 */
