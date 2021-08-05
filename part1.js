/* In Part 1, we're going to create a Superhero list! Think back to previous
 * lessons, help your classmates if things are going smoothly, and ask for help
 * if you need it!
 */


// 1. create three superheroes with the same format as Nobody Man

const nobodyMan = {
  name: "Nobody Man",
  secretIdentity: "Bob Fakeman",
  powers: ['invisibility', 'can erase your memory of him'],
  team: 'The Randos',
  saying: "You don't know me!",
}

// Add your heroes here

const rickRoll = {
  name: "Rick Roll",
  secretIdentity: "Rick Astley",
  powers: ['Never give you up', 'Never let you down', 'Never turn around and desert you'],
  team: 'The Trolls',
  saying: "You know the rules and so do I",
}

const shaggy = {
  name: "Ultra Instinct Shaggy",
  secretIdentity: "Shaggy Rogers",
  powers: ['Distort time and space', 'Eat scooby snacks'],
  team: 'Does not need one',
  saying: "Like, I'm not even using 1% of my power",
}

const beegBoy = {
  name: "Beeg Yoshi",
  secretIdentity: "Yoshi",
  powers: ['his strong gaze', 'his beeg size', 'beeg, beeg, beeg'],
  team: 'The big boys',
  saying: "...",
}

// 2. Create an array called "heroes" and put your hero objects in it

let heroes = [rickRoll, shaggy, beegBoy]

/* 3. Create a loop that makes a <div> element for each hero in the array. The
 * div should contain the following:
 *    a. An <h2> element that contains the hero's name at the top
 *    b. <p> elements that contain the hero's team and secret identity with
 *    labels
 *    c. An <ul> element that contains an <h3> element that contains "Powers:"
 *    and an <li> element that contains each of hero's powers
 *    d. A <p> element that has the hero's saying in quotes
 *
 *  The final product should look like this:
 *
 *  <div>
 *    <h2>Nobody Man</h2>
 *    <p>Team: The Randos</p>
 *    <p>Secret Identity: Bob Fakeman</p>
 *    <ul>
 *      <h3>Powers:</h3>
 *      <li>invisibility</li>
 *      <li>can erase your memory of him</li>
 *    </ul>
 *    <p>"You don't know me!"</p>
 *  </div>
 *
 * Finally, the loop should append the created div to the #hero-list element in
 * the index.html.
*/
for(let i = 0; i < heroes.length; i++)
{
let div = document.createElement("div");
let heroList = document.querySelector('#hero-list');
let ht = document.createElement("h2");
ht.innerHTML = heroes[i][`name`];
let p = document.createElement("p");
p.innerHTML = heroes[i][`secretIdentity`];
let p2 = document.createElement("p");
p2.innerHTML = heroes[i][`team`];
p2.innerText = "Team Name: " + heroes[i].name;
p.innerText = "Secret Identity: " + heroes[i].secretIdentity;



let ul = document.createElement("ul");
let h3 = document.createElement("h3");
h3.innerHTML = "Powers:";
ul.appendChild(h3)

let list0 = document.createElement("li");
list0.innerHTML = heroes[i].powers[0];
let list1 = document.createElement("li");
list1.innerHTML = heroes[i].powers[1];

let saying = document.createElement("p");
saying.innerHTML = heroes[i]["saying"];
saying.innerText = `"` + heroes[i].saying + `"`;

div.appendChild(ht);
div.appendChild(p2);
div.appendChild(p);
div.appendChild(ul);
div.appendChild(list0);
div.appendChild(list1);
div.appendChild(saying);
heroList.appendChild(div);
}

// Part 1 complete!

