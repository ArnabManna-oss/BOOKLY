// window.addEventListener('scroll', function() {
//     var aboutDiv = document.querySelector('.content1');
//     var heading = aboutDiv.querySelector('h1');
//     var paragraph = aboutDiv.querySelector('p');
//     var scrollPosition = window.pageYOffset;
  
//     // Calculate the offset for fading in the elements
//     var offset = aboutDiv.offsetTop - window.innerHeight + 200;
  
//     if (scrollPosition > offset) {
//       heading.style.opacity = '1';
//       paragraph.style.opacity = '1';
//       heading.style.transform='translateY(20%)'
//     }
//   });

window.addEventListener('scroll', function() {
    var aboutDiv = document.querySelector('.content1');
    var heading = aboutDiv.querySelector('h1');
    var paragraph = aboutDiv.querySelector('p');
    var scrollPosition = window.pageYOffset;
  
    var offset = aboutDiv.offsetTop - window.innerHeight + 200;
  
    if (scrollPosition > offset) {
      heading.style.opacity = '1';
      heading.style.bottom = '0'; // Slide the element back to its original position
      paragraph.style.opacity = '1';
      paragraph.style.bottom = '0'; // Slide the element back to its original position
    }
  });