// TODO: add code here
window.addEventListener("load", function() {
  const container = document.getElementById('container');
  //Classic Syntax
  // fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
  //   response.json().then( function(data) {
  
     
  //     for (let i = 0; i < data.length; i++) {
  //       let astronaut = data[i];
  //       container.innerHTML += `
  //       <div class="astronaut">
  //         <div class="bio">
  //           <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
  //           <ul>
  //               <li>Hours in space: ${astronaut.hoursInSpace}</li>
  //               <li>Active: ${astronaut.active}</li>
  //               <li>Skills: ${astronaut.skills.join(", ")}</li>
  //           </ul>
  //         </div>
  //         <img class="avatar" src="${astronaut.picture}">
  //       </div>
  //     ` 
  //     };
  //   });
  // });
 //Modern Syntax
  async function fetchAndDisplayAstronauts() {
    let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    let data = await response.json();

    data.sort(function(a, b) {
      return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    const count = document.getElementById("count");
    count.innerHTML = `Astronauts: ${data.length}`

    for (let i = 0; i < data.length; i++) {
      let astronaut = data[i];
      let activeClass = astronaut.active ? "active" : "";
      container.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li class=${activeClass}>Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}">
        </div>
          ` 
    }
  }
  fetchAndDisplayAstronauts();
});