let students = [
  {
    name: "Anthony Montmirail",
    age: 42,
    presentation: "Elle gère la fougère",
    passion: "Le domaine de la réparation m'a fait découvrir différents langages de programmation qui m’ont conduit à l’ACS. 'En mode Apprentissage'",
    softSkills: ["Présence", "Vision", "Audace", "Confiance", "Gestion du temps"],
    imgPro: "images/pro/anthony-pro.png"
  },

  {
    name: "Béatrice Hatsch",
    age: 53,
    presentation: "Ne fait pas aux autres ce que tu n'aimerais pas qu’on te fasse",
    passion: "L’une de mes passions l’univers de  la création . J’aimerai devenir développeur d’application",
    softSkills: ["Le sens du collectif", "La présence", "La motivation", "La créativité", "NinLa confiancejutsu"],
    imgPro: "images/pro/beatrice-pro.png"
  },

  {
    name: "Etienne Schmitt",
    age: 20,
    presentation: "Lorem ipsum 3",
    passion: "Réseaux informatiques",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Ninjutsu"],
    img: "images/pro/etienne-pro.png"
  },
  {
    name: "Ilias Imouli",
    age: 20,
    presentation: "Go hard or go home",
    passion: "Sport et voyage",
    softSkills: ["Autonome ", "Curieux ", "Créativite", "Sportif", "Organisé"],
    img: "images/pro/ilias-pro.png"
  },
  {
    name: "Isabelle Hennes",
    age: 20,
    presentation: "#warrior : Toujours se relever, toujours recommencer, Interdit d’abandonner!",
    passion: "Passionnée par les arts-martiaux, la mode, le makeup et les réseaux sociaux!",
    softSkills: ["L’empathie", "Gestion du temps", "Créativite", "L'esprit d’entreprendre", "Curiosité"],
    img: "images/pro/isabelle-pro.png"
  },
  {
    name: "Jérôme Rinner",
    age: 20,
    presentation: "La créativité est contagieuse, faites la tourner !",
    passion: "J'aime la simplicité, apprécier l'instant présent et m'émerveiller de la créativité de la vie, la nature",
    softSkills: ["Adaptabilité", "Esprit d'équipe", "Rigueur", "Passion", "Ecoute"],
    img: "images/pro/jerome-pro.png"
  },
  {
    name: "Joan Sor",
    age: 20,
    presentation: "Tout métier qui ne fait pas oublier le travail est un esclavage",
    passion: "while (travaille === plaisir et passion){console.log(“just do it”)};",
    softSkills: ["Motivation", "Créativité", "Ténacité", "Détermination", "Esprit d’équipe"],
    img: "images/pro/joan-pro.png"
  },
  {
    name: "Johanna Galli",
    age: 23,
    presentation: "Ce ne sont pas nos aptitudes qui montrent ce que nous sommes, ce sont nos choix",
    passion: "Les voyages, la musique, les montages vidéos, Harry Potter, les carnavals, et les amis",
    softSkills: ["Résolution des problèmes", "Gestion du temps", "Sens du collectif", "Créativité", "Empathie "],
    img: "images/pro/johanna-pro.png"
  },
  {
    name: "Julie Moulot",
    age: 23,
    presentation: "Nous vivons tous dans le ventre d’un chien géant, tout le monde le sait mais personne ne dit rien du tout",
    passion: "Fan de Tagada Jones et Ultra Vomit",
    softSkills: ["Aime observer", "écouter", "trouver des solutions", "Créativité", "Empathie"],
    img: "images/pro/julie-pro.png"
  },
  {
    name: "Ludovic Marin",
    age: 40,
    presentation: "OVH - Serveur Dédié - Ubuntu 18.04 - PHP 7.2 phpMyAdmin - jQuery - Js Vanilla - Css3 - Bootstrap - DNS - HTTPS - référencement",
    passion: "J’aime la musique et tout ce qui sonne pop, soul et funky. Je suis également passionné du web auquel je contribu depuis 2005 à travers 2 plateformes que j’ai réalisé et que j’ai mis en ligne. L’une étant un média musical que j’ai depuis arrêté et l’autre une niche centrée autour du partage et de la vente d’instrumentales",
    softSkills: ["Curieux", "Astucieux", "Débrouillard", "Ponctuel", "Créatif"],
    img: "images/pro/ludovic-pro.png"
  },
  {
    name: "Maëra David",
    age: 21,
    presentation: "Parmi les faibles, le plus fort est celui qui n’oublie pas sa faiblesse",
    passion: "Passionnée par la culture Japonaise, je suis également une grande amatrice de lecture en tout genre. J’aime beaucoup jouer aux jeux vidéos et dessiner. Niveau pro, je souhaiterai développer mes compétences afin de pouvoir travailler dans une entreprise ou une agence en tant que développeur web, et gagner en expérience pour grimper les échelons",
    softSkills: ["Empathie", "Créativité", "Motivation", "Communication", "Confiance"],
    img: "images/pro/maera-pro.png"
  },
  {
    name: "Messaouda Benchikh",
    age: 37,
    presentation: "Nous avons tous des idées positives, c’est avec de l’énergie et de la créativité que nous pouvons les réaliser. Nous sommes présents pour trouver des solutions et pour vous faciliter la vie",
    passion: "Informatique et mathématique, histoire, nouvelles technologies, voyage et langues étrangères.",
    softSkills: ["L’innovation", "Travail en groupe", "Communication", "Motivation", "Productivité"],
    img: "images/pro/messaouda-pro.png"
  },
  {
    name: "Nebojsa Mihaljevic",
    age: 48,
    presentation: "Work hard and have fun!!",
    passion: "Sports, voyage, passer le temps avec la famille et les amis",
    softSkills: ["Travailleur", "Précis", "Fiable", "Sérieux", "Raisonnable"],
    img: "images/pro/nebo-pro.png"
  },
  {
    name: "Victor Lapostolle",
    age: 25,
    presentation: "L’ignorant affirme, le savant doute, le sage réfléchit",
    passion: "Le web et les BD",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Patience"],
    img: "images/pro/victor-pro.png"
  },
  {
    name: "Thomas Loegell",
    age: 25,
    presentation: "Les rêves donnent l’envie d’être à demain",
    passion: "Passionné par les plantes dont je ne connais même pas les noms !",
    softSkills: ["Flexibilité", "Le sens du service", "L’esprit d’équipe", "La curiosité", "L’esprit d’entreprendre"],
    img: "images/pro/thomas-pro.png"
  }
];

let name1 = document.getElementsByClassName("name1");
let age1 = document.getElementsByClassName("age1");
let passion1 = document.getElementsByClassName("passion1");
let presentation1 = document.getElementsByClassName("presentation1");

let name2 = document.getElementsByClassName("name2");
let age2 = document.getElementsByClassName("age2");
let passion2 = document.getElementsByClassName("passion2");

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

$('#myCarousel').on('slide.bs.carousel', function onSlide(ev) {
  // var id = ev.relatedTarget.id; // this one does not function
  let id = $(ev.relatedTarget).index();

  switch (id) {
    case 0:
      navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ACCESS CODE SCHOOL</span></h2>";
      break;

    case 1:
      navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ANTHONY</span></h2>";
      // name1[0].textContent = "Nom et prenom : " + students[0].name;
      age1[0].textContent = "Age : " + students[0].age;
      passion1[0].textContent = "Passion : " + students[0].passion;
      presentation1[0].textContent = "Presentation : " + students[0].presentation;
      skill1[0].textContent = students[0].softSkills[0];
      skill2[0].textContent = students[0].softSkills[1];
      skill3[0].textContent = students[0].softSkills[2];
      skill4[0].textContent = students[0].softSkills[3];
      skill5[0].textContent = students[0].softSkills[4];
      passion2[0].textContent = students[0].experience;
      name2[0].textContent = students[0].name;
      age2[0].textContent = students[0].age;
      passion2[0].textContent = students[0].passion;
      break;

    case 2:
      navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>BEATRICE</span></h2>";
      // name1[1].textContent = students[1].name;
      age1[1].textContent = students[1].age;
      passion1[1].textContent = students[1].passion;
      presentation1[1].textContent = students[1].presentation;
      skill1[1].textContent = students[1].softSkills[0];
      skill2[1].textContent = students[1].softSkills[1];
      skill3[1].textContent = students[1].softSkills[2];
      skill4[1].textContent = students[1].softSkills[3];
      skill5[1].textContent = students[1].softSkills[4];
      name2[1].textContent = students[1].name;
      age2[1].textContent = students[1].age;
      passion2[1].textContent = students[1].passion;
      break;

    case 3:
      navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ETIENNE</span></h2>";
      // name1[2].textContent = students[2].name;
      age1[2].textContent = students[2].age;
      passion1[2].textContent = students[2].passion;
      presentation1[2].textContent = students[2].presentation;
      skill1[2].textContent = students[2].softSkills[0];
      skill2[2].textContent = students[2].softSkills[1];
      skill3[2].textContent = students[2].softSkills[2];
      skill4[2].textContent = students[2].softSkills[3];
      skill5[2].textContent = students[2].softSkills[4];
      name2[2].textContent = students[2].name;
      age2[2].textContent = students[2].age;
      passion2[2].textContent = students[2].passion;
      break;

    default:
      navbarText.textContent = "";
  }
})
