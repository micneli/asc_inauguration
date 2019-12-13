
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

$('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
  // var id = ev.relatedTarget.id; // this one does not function
  let id = $(ev.relatedTarget).index();

  switch (id) {
    case 0:
        // navbarTextStart.classList.add("#navbar-text-start");
        navbarText.innerHTML = "<h3>WANTED: ACCESS CODE SCHOOL</h3>";
      break;

    case 1:
        navbarText.innerHTML = "<h3>WANTED: ILIYAS, 22 ANS, WEB DEVELOPPEUR</h3>";
      break;

    case 2:
        navbarText.innerHTML = "<h3>WANTED: JOHANNA, 22 ANS, WEB DEVELOPPEUR </h3>";
      break;

    case 3:
      navbarText.innerHTML = "<h3>WANTED: NEBO, 48 ANS, WEB DEVELOPPEUR </h3>";
    break;

    default:
        navbarText.textContent = "";
  }
})

//document.getElementById('carouselExample').addEventListener('slide.bs.carousel', function () {
    // console.log('slide fired')
// })

// $('#carouselExample').on('slide.bs.carousel', function () {
//     console.log('slide next clicked')
// })

/* <div id="carouselExample" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn1.vectorstock.com/i/1000x1000/27/05/destination-flag-icon-flat-style-vector-19372705.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn1.vectorstock.com/i/1000x1000/26/80/flag-icon-flat-style-vector-19372680.jpg" alt="Second slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */
