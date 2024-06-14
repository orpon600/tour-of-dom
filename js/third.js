const main = document.getElementById("main-container");
const section = document.createElement("section");
section.innerHTML = `
 <h1> My dynamic section</h1>
 <p>Extra text added inside paragraph</p>
 <ul>
   <li>first item</li>
   <li>second item</li>
   <li>3rd item</li>
   <li>4th item</li>
 </ul>
`;

main.appendChild(section);
