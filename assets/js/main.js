let students = [
  {
    name: "Anthony Montmirail",
    surname: "Tony ",
    age: 42,
    presentation: "Elle gère la fougère",
    passion: "Le domaine de la réparation m'a fait découvrir différents langages de programmation qui m’ont conduit à l’ACS. 'En mode Apprentissage'",
    softSkills: ["Présence", "Vision", "Audace", "Confiance", "Gestion du temps"],
    devise: "Demain nous appartient",
    passionFun: "J'ai découvert la Trotinette et depuis je suis libéré, délivré ... lol"
  },

  {
    name: "Béatrice Hatsch",
    surname: "Béa",
    age: 53,
    presentation: "Ne fait pas aux autres ce que tu n'aimerais pas qu’on te fasse",
    passion: "L’une de mes passions l’univers de  la création . J’aimerai devenir développeur d’application",
    softSkills: ["Le sens du collectif", "La présence", "La motivation", "La créativité", "NinLa confiancejutsu"],
    devise: " ",
    passionFun: " "
  },

  {
    name: "Etienne Schmitt",
    surname: "Syrgo",
    age: 22,
    presentation: "La programmation est simple mais il faut être un génie pour comprendre sa simplicité ",
    passion: "Passionné par les jeux de cartes et de rôle je crée des parties de Donjon et Dragon au quotidien, j’aime également le monde de la programmation informatique et développe des apps/webapps pour le jeu de rôles",
    softSkills: ["Esprit critique", "Coopération", "Curiosité", "VIsion", "Présence "],
    devise: "Toujours conserver sa meilleure carte à porté de main",
    passionFun: "Jeux de rôles/cartes/vidéos et UNIX"
  },
  {
    name: "Ilias Imouli",
    surname: "Ili",
    age: 22,
    presentation: "Go hard or go home",
    passion: "Sport et voyage",
    softSkills: ["Autonome ", "Curieux ", "Créativite", "Sportif", "Organisé"],
    devise: " ",
    passionFun: " "
  },
  {
    name: "Irina Pintchuk",
    surname: "Irina",
    age: 40,
    presentation: "Les rêves donnent l’envie d’être à demain",
    passion: "Passionné par les plantes dont je ne connais même pas les noms !",
    softSkills: ["Empathie", "L’esprit d’équipe", "Flexibilité ", "Curiosité", "capacité d'écoute"],
    devise: " ",
    passionFun: " "
  },
  {
    name: "Isabelle Hennes",
    surname: "Isa ou Zabou",
    age: 32,
    presentation: "#warrior : Toujours se relever, toujours recommencer, Interdit d’abandonner!",
    passion: "Passionnée par les arts-martiaux, la mode, le makeup et les réseaux sociaux!",
    softSkills: ["L’empathie", "Gestion du temps", "Créativite", "L'esprit d’entreprendre", "Curiosité"],
    devise: "#warrior",
    passionFun: "Passionnée par les arts-martiaux, la mode, le makeup et les réseaux sociaux!"
  },
  {
    name: "Jérôme Rinner",
    surname: "Le crieur",
    age:37 ,
    presentation: "La créativité est contagieuse, faites la tourner !",
    passion: "J'aime la simplicité, apprécier l'instant présent et m'émerveiller de la créativité de la vie, la nature",
    softSkills: ["Adaptabilité", "Esprit d'équipe", "Rigueur", "Passion", "Ecoute"],
    devise: "Du bout de mon canon la liberté tu trouvera",
    passionFun: "Répandre la bonne parole avec mon six coups"
  },
  {
    name: "Joan Sor",
    surname: "Jojo",
    age: 34,
    presentation: "Tout métier qui ne fait pas oublier le travail est un esclavage",
    passion: "while (travaille === plaisir et passion){console.log(“just do it”)};",
    softSkills: ["Motivation", "Créativité", "Ténacité", "Détermination", "Esprit d’équipe"],
    devise: "Chuck Norris ne ment jamais, c'est la vérité qui se trompe",
    passionFun: "Tricher au Uno !"
  },
  {
    name: "Johanna Galli",
    surname: "Djobi",
    age: 23,
    presentation: "Ce ne sont pas nos aptitudes qui montrent ce que nous sommes, ce sont nos choix",
    passion: "Les voyages, la musique, les montages vidéos, Harry Potter, les carnavals, et les amis",
    softSkills: ["Résolution des problèmes", "Gestion du temps", "Sens du collectif", "Créativité", "Empathie "],
    devise: "Sans la musique, la vie serait une erreur",
    passionFun: "Les voyages, la musique, les montages vidéos, Harry Potter, les carnavals, et les amis"
  },
  {
    name: "Julie Moulot",
    surname: "Julie",
    age: 23,
    presentation: "Nous vivons tous dans le ventre d’un chien géant, tout le monde le sait mais personne ne dit rien du tout",
    passion: "Fan de Tagada Jones et Ultra Vomit",
    softSkills: ["Aime observer", "écouter et trouver des solutions"],
    devise: " ",
    passionFun: " "
  },
  {
    name: "Ludovic Marin",
    surname: "Ludo",
    age: 40,
    presentation: "OVH - Serveur Dédié - Ubuntu 18.04 - PHP 7.2 phpMyAdmin - jQuery - Js Vanilla - Css3 - Bootstrap - DNS - HTTPS - référencement",
    passion: "J’aime la musique et tout ce qui sonne pop, soul et funky. Je suis également passionné du web auquel je contribu depuis 2005 à travers 2 plateformes que j’ai réalisé et que j’ai mis en ligne. L’une étant un média musical que j’ai depuis arrêté et l’autre une niche centrée autour du partage et de la vente d’instrumentales",
    softSkills: ["Curieux", "Astucieux", "Débrouillard", "Ponctuel", "Créatif"],
    devise: " ",
    passionFun: " "
  },
  {
    name: "Maëra David",
    surname: "Yaya ",
    age: 21,
    presentation: "Parmi les faibles, le plus fort est celui qui n’oublie pas sa faiblesse",
    passion: "Passionnée par la culture Japonaise, je suis également une grande amatrice de lecture en tout genre. J’aime beaucoup jouer aux jeux vidéos et dessiner. Niveau pro, je souhaiterai développer mes compétences afin de pouvoir travailler dans une entreprise ou une agence en tant que développeur web, et gagner en expérience pour grimper les échelons",
    softSkills: ["Empathie", "Créativité", "Motivation", "Communication", "Confiance"],
    devise: "Konnichiwa minna-san !",
    passionFun: "Les jeux vidéos, la culture japonaise, les bouquins, le dessin et le chant !"
  },
  {
    name: "Messaouda Benchikh",
    surname: "Messa",
    age: 37,
    presentation: "Nous avons tous des idées positives, c’est avec de l’énergie et de la créativité que nous pouvons les réaliser. Nous sommes présents pour trouver des solutions et pour vous faciliter la vie",
    passion: "Informatique et mathématique, histoire, nouvelles technologies, voyage et langues étrangères, soin des animaux, la nature ",
    softSkills: ["L’innovation", "Travail en groupe", "Communication", "Motivation", "Productivité"],
    devise: "La souffrance génère la créativité, courage toi même,  soit tu gagnes. Sois-tu apprends",
    passionFun: "Parler aux chats, j'aime beaucoup le panda, j'adore les aventures de Tintin"
  },
  {
    name: "Nebojsa Mihaljevic",
    surname: "Nebo",
    age: 48,
    presentation: "Work hard and have fun!!",
    passion: "Sports, voyage, passer le temps avec la famille et les amis",
    softSkills: ["Travailleur", "Précis", "Fiable", "Sérieux", "Raisonnable"],
    devise: "Mieux vaut prévenir que guérir",
    passionFun: "Rechercher le monde de nature"
  },
  {
    name: "Victor Lapostolle",
    surname: "Raptaman",
    age: 25,
    presentation: "L’ignorant affirme, le savant doute, le sage réfléchit",
    passion: "Le web et les BD",
    softSkills: ["Curiosité", "Adaptabilité", "Endurance", "Créativité", "Patience"],
    devise: "I’m Batman but less rich",
    passionFun: "Ma passion c’est Batman, je dessine Batman, je parle Batman, I AM BATMAN"
  },
  {
    name: "Nabil",
    surname: "Big Neb",
    age: 25,
    presentation: "Les rêves donnent l’envie d’être à demain",
    passion: "Passionné par les plantes dont je ne connais même pas les noms !",
    softSkills: ["Flexibilité", "Le sens du service", "L’esprit d’équipe", "La curiosité", "L’esprit d’entreprendre"],
    devise: " ",
    passionFun: " "
  },
  {
    name: "Thomas Loegell",
    surname: "Jamy",
    age: 33,
    presentation: "Les rêves donnent l’envie d’être à demain",
    passion: "Passionné par les plantes dont je ne connais même pas les noms !",
    softSkills: ["Flexibilité", "Le sens du service", "L’esprit d’équipe", "La curiosité", "L’esprit d’entreprendre"],
    devise: "En route Marcel",
    passionFun: "Les sports de glisses"
  }
];

let name1 = document.getElementsByClassName("name1");
let age1 = document.getElementsByClassName("age1");
let passion1 = document.getElementsByClassName("passion1");
let presentation1 = document.getElementsByClassName("presentation1");

let surname = document.getElementsByClassName("surname");
let devise = document.getElementsByClassName("devise");
let passionFun = document.getElementsByClassName("passionFun");

let skill1 = document.getElementsByClassName("skill1");
let skill2 = document.getElementsByClassName("skill2");
let skill3 = document.getElementsByClassName("skill3");
let skill4 = document.getElementsByClassName("skill4");
let skill5 = document.getElementsByClassName("skill5");


$('#myCarousel').carousel({
  interval: 10000
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
      // navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ACCESS CODE SCHOOL</span></h2>";
      break;

    case 1:
      // navbarText.innerHTML = "<h2><span style='color:red; font-weight: bold;'>ANTHONY</span></h2>";
      // name1[0].textContent = "Nom et prenom : " + students[0].name;
      age1[0].textContent = "Age : " + students[0].age;
      passion1[0].textContent = "Passion : " + students[0].passion;
      presentation1[0].textContent = "Presentation : " + students[0].presentation;
      skill1[0].textContent = students[0].softSkills[0];
      skill2[0].textContent = students[0].softSkills[1];
      skill3[0].textContent = students[0].softSkills[2];
      skill4[0].textContent = students[0].softSkills[3];
      skill5[0].textContent = students[0].softSkills[4];
      surname[0].textContent = "Surname : " + students[0].surname;
      devise[0].textContent = "Devise : " + students[0].devise;
      passionFun[0].textContent = "Passion fun : " + students[0].passionFun;
      break;

    case 2:
      age1[1].textContent = "Age : " + students[1].age;
      passion1[1].textContent = "Passion : " + students[1].passion;
      presentation1[1].textContent = "Presentation : " + students[1].presentation;
      skill1[1].textContent = students[1].softSkills[0];
      skill2[1].textContent = students[1].softSkills[1];
      skill3[1].textContent = students[1].softSkills[2];
      skill4[1].textContent = students[1].softSkills[3];
      skill5[1].textContent = students[1].softSkills[4];
      surname[1].textContent = "Surname : " + students[1].surname;
      devise[1].textContent = "Devise : " + students[1].devise;
      passionFun[1].textContent = "Passion fun : " + students[1].passionFun;
      break;

    case 3:
      age1[2].textContent = "Age : " + students[2].age;
      passion1[2].textContent = "Passion : " + students[2].passion;
      presentation1[2].textContent = "Presentation : " + students[2].presentation;
      skill1[2].textContent = students[2].softSkills[0];
      skill2[2].textContent = students[2].softSkills[1];
      skill3[2].textContent = students[2].softSkills[2];
      skill4[2].textContent = students[2].softSkills[3];
      skill5[2].textContent = students[2].softSkills[4];
      surname[2].textContent = "Surname : " + students[2].surname;
      devise[2].textContent = "Devise : " + students[2].devise;
      passionFun[2].textContent = "Passion fun : " + students[2].passionFun;
      break;

    case 4:
        age1[3].textContent = "Age : " + students[3].age;
        passion1[3].textContent = "Passion : " + students[3].passion;
        presentation1[3].textContent = "Presentation : " + students[3].presentation;
        skill1[3].textContent = students[3].softSkills[0];
        skill2[3].textContent = students[3].softSkills[1];
        skill3[3].textContent = students[3].softSkills[2];
        skill4[3].textContent = students[3].softSkills[3];
        skill5[3].textContent = students[3].softSkills[4];
        surname[3].textContent = "Surname : " + students[3].surname;
        devise[3].textContent = "Devise : " + students[3].devise;
        passionFun[3].textContent = "Passion fun : " + students[3].passionFun;
        break;

    case 5:
        age1[4].textContent = "Age : " + students[4].age;
        passion1[4].textContent = "Passion : " + students[4].passion;
        presentation1[4].textContent = "Presentation : " + students[4].presentation;
        skill1[4].textContent = students[4].softSkills[0];
        skill2[4].textContent = students[4].softSkills[1];
        skill3[4].textContent = students[4].softSkills[2];
        skill4[4].textContent = students[4].softSkills[3];
        skill5[4].textContent = students[4].softSkills[4];
        surname[4].textContent = "Surname : " + students[4].surname;
        devise[4].textContent = "Devise : " + students[4].devise;
        passionFun[4].textContent = "Passion fun : " + students[4].passionFun;
        break;

    case 6:
          age1[5].textContent = "Age : " + students[5].age;
          passion1[5].textContent = "Passion : " + students[5].passion;
          presentation1[5].textContent = "Presentation : " + students[5].presentation;
          skill1[5].textContent = students[5].softSkills[0];
          skill2[5].textContent = students[5].softSkills[1];
          skill3[5].textContent = students[5].softSkills[2];
          skill4[5].textContent = students[5].softSkills[3];
          skill5[5].textContent = students[5].softSkills[4];
          surname[5].textContent = "Surname : " + students[5].surname;
          devise[5].textContent = "Devise : " + students[5].devise;
          passionFun[5].textContent = "Passion fun : " + students[5].passionFun;
          break;

    case 7:
          age1[6].textContent = "Age : " + students[6].age;
          passion1[6].textContent = "Passion : " + students[6].passion;
          presentation1[6].textContent = "Presentation : " + students[6].presentation;
          skill1[6].textContent = students[6].softSkills[0];
          skill2[6].textContent = students[6].softSkills[1];
          skill3[6].textContent = students[6].softSkills[2];
          skill4[6].textContent = students[6].softSkills[3];
          skill5[6].textContent = students[6].softSkills[4];
          surname[6].textContent = "Surname : " + students[6].surname;
          devise[6].textContent = "Devise : " + students[6].devise;
          passionFun[6].textContent = "Passion fun : " + students[6].passionFun;
          break;

    case 8:
          age1[7].textContent = "Age : " + students[7].age;
          passion1[7].textContent = "Passion : " + students[7].passion;
          presentation1[7].textContent = "Presentation : " + students[7].presentation;
          skill1[7].textContent = students[7].softSkills[0];
          skill2[7].textContent = students[7].softSkills[1];
          skill3[7].textContent = students[7].softSkills[2];
          skill4[7].textContent = students[7].softSkills[3];
          skill5[7].textContent = students[7].softSkills[4];
          surname[7].textContent = "Surname : " + students[7].surname;
          devise[7].textContent = "Devise : " + students[7].devise;
          passionFun[7].textContent = "Passion fun : " + students[7].passionFun;
          break;

    case 9:
          age1[8].textContent = "Age : " + students[8].age;
          passion1[8].textContent = "Passion : " + students[8].passion;
          presentation1[8].textContent = "Presentation : " + students[8].presentation;
          skill1[8].textContent = students[8].softSkills[0];
          skill2[8].textContent = students[8].softSkills[1];
          skill3[8].textContent = students[8].softSkills[2];
          skill4[8].textContent = students[8].softSkills[3];
          skill5[8].textContent = students[8].softSkills[4];
          surname[8].textContent = "Surname : " + students[8].surname;
          devise[8].textContent = "Devise : " + students[8].devise;
          passionFun[8].textContent = "Passion fun : " + students[8].passionFun;
          break;

    case 10:
          age1[9].textContent = "Age : " + students[9].age;
          passion1[9].textContent = "Passion : " + students[9].passion;
          presentation1[9].textContent = "Presentation : " + students[9].presentation;
          skill1[9].textContent = students[9].softSkills[0];
          skill2[9].textContent = students[9].softSkills[1];
          skill3[9].textContent = students[9].softSkills[2];
          skill4[9].textContent = students[9].softSkills[3];
          skill5[9].textContent = students[9].softSkills[4];
          surname[9].textContent = "Surname : " + students[9].surname;
          devise[9].textContent = "Devise : " + students[9].devise;
          passionFun[9].textContent = "Passion fun : " + students[9].passionFun;
          break;

    case 11:
          age1[10].textContent = "Age : " + students[10].age;
          passion1[10].textContent = "Passion : " + students[10].passion;
          presentation1[10].textContent = "Presentation : " + students[10].presentation;
          skill1[10].textContent = students[10].softSkills[0];
          skill2[10].textContent = students[10].softSkills[1];
          skill3[10].textContent = students[10].softSkills[2];
          skill4[10].textContent = students[10].softSkills[3];
          skill5[10].textContent = students[10].softSkills[4];
          surname[10].textContent = "Surname : " + students[10].surname;
          devise[10].textContent = "Devise : " + students[10].devise;
          passionFun[10].textContent = "Passion fun : " + students[10].passionFun;
          break;

    case 12:
          age1[11].textContent = "Age : " + students[11].age;
          passion1[11].textContent = "Passion : " + students[11].passion;
          presentation1[11].textContent = "Presentation : " + students[11].presentation;
          skill1[11].textContent = students[11].softSkills[0];
          skill2[11].textContent = students[11].softSkills[1];
          skill3[11].textContent = students[11].softSkills[2];
          skill4[11].textContent = students[11].softSkills[3];
          skill5[11].textContent = students[11].softSkills[4];
          surname[11].textContent = "Surname : " + students[11].surname;
          devise[11].textContent = "Devise : " + students[11].devise;
          passionFun[11].textContent = "Passion fun : " + students[11].passionFun;
          break;

    case 13:
          age1[12].textContent = "Age : " + students[12].age;
          passion1[12].textContent = "Passion : " + students[12].passion;
          presentation1[12].textContent = "Presentation : " + students[12].presentation;
          skill1[12].textContent = students[12].softSkills[0];
          skill2[12].textContent = students[12].softSkills[1];
          skill3[12].textContent = students[12].softSkills[2];
          skill4[12].textContent = students[12].softSkills[3];
          skill5[12].textContent = students[12].softSkills[4];
          surname[12].textContent = "Surname : " + students[12].surname;
          devise[12].textContent = "Devise : " + students[12].devise;
          passionFun[12].textContent = "Passion fun : " + students[12].passionFun;
          break;

    case 14:
          age1[13].textContent = "Age : " + students[13].age;
          passion1[13].textContent = "Passion : " + students[13].passion;
          presentation1[13].textContent = "Presentation : " + students[13].presentation;
          skill1[13].textContent = students[13].softSkills[0];
          skill2[13].textContent = students[13].softSkills[1];
          skill3[13].textContent = students[13].softSkills[2];
          skill4[13].textContent = students[13].softSkills[3];
          skill5[13].textContent = students[13].softSkills[4];
          surname[13].textContent = "Surname : " + students[13].surname;
          devise[13].textContent = "Devise : " + students[13].devise;
          passionFun[13].textContent = "Passion fun : " + students[13].passionFun;
          break;

    case 15:
          age1[14].textContent = "Age : " + students[14].age;
          passion1[14].textContent = "Passion : " + students[14].passion;
          presentation1[14].textContent = "Presentation : " + students[14].presentation;
          skill1[14].textContent = students[14].softSkills[0];
          skill2[14].textContent = students[14].softSkills[1];
          skill3[14].textContent = students[14].softSkills[2];
          skill4[14].textContent = students[14].softSkills[3];
          skill5[14].textContent = students[14].softSkills[4];
          surname[14].textContent = "Surname : " + students[14].surname;
          devise[14].textContent = "Devise : " + students[14].devise;
          passionFun[14].textContent = "Passion fun : " + students[14].passionFun;
          break;

    case 16:
          age1[15].textContent = "Age : " + students[15].age;
          passion1[15].textContent = "Passion : " + students[15].passion;
          presentation1[15].textContent = "Presentation : " + students[15].presentation;
          skill1[15].textContent = students[15].softSkills[0];
          skill2[15].textContent = students[15].softSkills[1];
          skill3[15].textContent = students[15].softSkills[2];
          skill4[15].textContent = students[15].softSkills[3];
          skill5[15].textContent = students[15].softSkills[4];
          surname[15].textContent = "Surname : " + students[15].surname;
          devise[15].textContent = "Devise : " + students[15].devise;
          passionFun[15].textContent = "Passion fun : " + students[15].passionFun;
          break;

    case 17:
          age1[16].textContent = "Age : " + students[16].age;
          passion1[16].textContent = "Passion : " + students[16].passion;
          presentation1[16].textContent = "Presentation : " + students[16].presentation;
          skill1[16].textContent = students[16].softSkills[0];
          skill2[16].textContent = students[16].softSkills[1];
          skill3[16].textContent = students[16].softSkills[2];
          skill4[16].textContent = students[16].softSkills[3];
          skill5[16].textContent = students[16].softSkills[4];
          surname[16].textContent = "Surname : " + students[16].surname;
          devise[16].textContent = "Devise : " + students[16].devise;
          passionFun[16].textContent = "Passion fun : " + students[16].passionFun;
          break;

    case 18:
          age1[17].textContent = "Age : " + students[17].age;
          passion1[17].textContent = "Passion : " + students[17].passion;
          presentation1[17].textContent = "Presentation : " + students[17].presentation;
          skill1[17].textContent = students[17].softSkills[0];
          skill2[17].textContent = students[17].softSkills[1];
          skill3[17].textContent = students[17].softSkills[2];
          skill4[17].textContent = students[17].softSkills[3];
          skill5[17].textContent = students[17].softSkills[4];
          surname[17].textContent = "Surname : " + students[17].surname;
          devise[17].textContent = "Devise : " + students[17].devise;
          passionFun[17].textContent = "Passion fun : " + students[17].passionFun;
          break;

    
    

    default:
      navbarText.textContent = "";
  }
})
