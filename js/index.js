const data = [
     {
          name: "React",
          skill: "80%",
          catagory: "web"
     },
     {
          name: "Others",
          skill: "80%",
          catagory: "others"
     },
     {
          name: "Proggramin",
          skill: "80%",
          catagory: "proggraming"
     },
     {
          name: "Tools",
          skill: "80%",
          catagory: "tools"
     },
];

let skills = document.getElementById('skill');

const addSkill = (d, data) => {
     let filter = data.filter(item => item.catagory === d);
     let div = document.createElement('div');
     skills.innerHTML = ' ';
     filter.forEach(item => {
          div.innerHTML = `
          <div class="progress1 container">
              <h2>${item.name}</h2>
              <h2>${item.skill}</h2>
          </div>
          <div class="progress-line">
      </div>`
          div.classList.add("progress-grid")
          skills.appendChild(div);
     })
}
const skill = (skills, s = 0) => {
     const btn = document.getElementsByClassName('skill-btn');
     const skill = skills ? skills : 'web';
     for (let i = 0; i < btn.length; i++) {
          if (i != s)
               btn[i].classList.remove("active");
     }
     let filter;
     filter = data.filter(item => item.catagory === skill);
     if (skill === filter[0].catagory) {
          addSkill(skill, data);
          btn[s].classList.add("active");
     }

}

skill();
