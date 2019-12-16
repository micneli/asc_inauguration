let students = [
  {
    name: "Anthony Montmiraill",
    age: 38,
    experience: "C++ programmation",
    presentation: "Lorem ipsum 1",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Ninjutsu"]
  },

  {
    name: "Beatrice",
    age: 52,
    experience: "JavaScript programmation",
    presentation: "Lorem ipsum 2",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Ninjutsu"]
  },

  {
    name: "Etienne",
    age: 20,
    experience: "Réseaux informatiques",
    presentation: "Lorem ipsum 3",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Ninjutsu"]
  }
];

let name1 = document.getElementsByClassName("name1");
let age1 = document.getElementsByClassName("age1");
let experience1 = document.getElementsByClassName("experience1");

let name2 = document.getElementsByClassName("name2");
let age2 = document.getElementsByClassName("age2");
let experience2 = document.getElementsByClassName("experience2");

let presentation = document.getElementById("presentation");

let skill1 = document.getElementsByClassName("skill1");
let skill2 = document.getElementsByClassName("skill2");
let skill3 = document.getElementsByClassName("skill3");
let skill4 = document.getElementsByClassName("skill4");
let skill5 = document.getElementsByClassName("skill5");


$('#myCarousel').carousel({
  interval: 5000
})

let navbar = document.querySelector(".navbar");
let navbarText = document.querySelector(".navbar-text");

//*************** these are indexes of previous and next slides, respectively *************/
// $('.carousel').on('slide.bs.carousel',function(e){
//     let slideFrom = $(this).find('.active').index();
//     let slideTo = $(e.relatedTarget).index();
//     console.log(slideFrom+' => '+slideTo);
// });

$('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
  // var id = ev.relatedTarget.id; // this one does not function
  let id = $(ev.relatedTarget).index();

  switch (id) {
    case 0:
        navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ACCESS CODE SCHOOL</span></h2>";
      break;

    case 1:
        navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ANTHONY</span></h2>";
        name1[0].textContent = "Nom et prenom : " + students[0].name;
        age1[0].textContent = "Age : " + students[0].age;
        presentation.textContent = students[0].presentation;
        skill1[0].textContent = students[0].softSkills[0];
        skill2[0].textContent = students[0].softSkills[1];
        skill3[0].textContent = students[0].softSkills[2];
        skill4[0].textContent = students[0].softSkills[3];
        skill5[0].textContent = students[0].softSkills[4];
        experience1[0].textContent = students[0].experience;
        name2[0].textContent = students[0].name;
        age2[0].textContent = students[0].age;
        experience2[0].textContent = students[0].experience;
      break;

    case 2:
        navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>BEATRICE</span></h2>";
        name1[1].textContent = students[1].name;
        age1[1].textContent = students[1].age;
        experience1[1].textContent = students[1].experience;
        presentation.textContent = students[1].presentation;
        skill1[1].textContent = students[1].softSkills[0];
        skill2[1].textContent = students[1].softSkills[1];
        skill3[1].textContent = students[1].softSkills[2];
        skill4[1].textContent = students[1].softSkills[3];
        skill5[1].textContent = students[1].softSkills[4];
        name2[1].textContent = students[1].name;
        age2[1].textContent = students[1].age;
        experience2[1].textContent = students[1].experience;
      break;

    case 3:
        navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ETIENNE</span></h2>";
        name1[2].textContent = students[2].name;
        age1[2].textContent = students[2].age;
        experience1[2].textContent = students[2].experience;
        presentation.textContent = students[2].presentation;
        skill1[2].textContent = students[2].softSkills[0];
        skill2[2].textContent = students[2].softSkills[1];
        skill3[2].textContent = students[2].softSkills[2];
        skill4[2].textContent = students[2].softSkills[3];
        skill5[2].textContent = students[2].softSkills[4];
        name2[2].textContent = students[2].name;
        age2[2].textContent = students[2].age;
        experience2[2].textContent = students[2].experience;
      break;

    default:
        navbarText.textContent = "";
  }
})
