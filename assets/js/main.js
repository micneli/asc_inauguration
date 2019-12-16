let students = [
  {
    name: "Anthony",
    age: 38,
    experience: "C++ programmation"
  },

  {
    name: "Beatrice",
    age: 52,
    experience: "JavaScript programmation"
  },

  {
    name: "Etienne",
    age: 20,
    experience: "Réseaux informatiques"
  }
];

let name1 = document.getElementsByClassName("name1");
let age1 = document.getElementsByClassName("age1");
let experience1 = document.getElementsByClassName("experience1");

let name2 = document.getElementsByClassName("name2");
let age2 = document.getElementsByClassName("age2");
let experience2 = document.getElementsByClassName("experience2");


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
        navbarText.innerHTML = "<h3>ACCESS CODE SCHOOL</h3>";
      break;

    case 1:
        // navbarText.innerHTML = "<h3>WANTED: ANTHONY, 38 ANS, WEB DEVELOPPEUR</h3>";
        name1[0].textContent = students[0].name;
        age1[0].textContent = students[0].age;
        experience1[0].textContent = students[0].experience;
        name2[0].textContent = students[0].name;
        age2[0].textContent = students[0].age;
        experience2[0].textContent = students[0].experience;
      break;

    case 2:
        // navbarText.innerHTML = "<h3>WANTED: BEATRICE, 53 ANS, WEB DEVELOPPEUR </h3>";
        name1[1].textContent = students[1].name;
        age1[1].textContent = students[1].age;
        experience1[1].textContent = students[1].experience;
        name2[1].textContent = students[1].name;
        age2[1].textContent = students[1].age;
        experience2[1].textContent = students[1].experience;
      break;

    case 3:
        // navbarText.innerHTML = "<h3>WANTED: ETIENNE, 22 ANS, WEB DEVELOPPEUR </h3>";
        name1[2].textContent = students[2].name;
        age1[2].textContent = students[2].age;
        experience1[2].textContent = students[2].experience;
        name2[2].textContent = students[2].name;
        age2[2].textContent = students[2].age;
        experience2[2].textContent = students[2].experience;
      break;

    default:
        navbarText.textContent = "";
  }
})
