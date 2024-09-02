document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    alert('Obrigado por se cadastrar, ' + name + '! Um e-mail foi enviado para ' + email + ' com mais detalhes.');
});

document.getElementById('visit-site').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecionando de volta para a página inicial.');
    window.location.href = '#';
});

// document.addEventListener('DOMContentLoaded', function() {
//     let currentIndex = 0;
//     const images = document.querySelectorAll('.carousel-images img');
//     const totalImages = images.length;

//     document.querySelector('.next').addEventListener('click', function() {
//         currentIndex = (currentIndex + 1) % totalImages;
//         updateCarousel();
//     });

//     document.querySelector('.prev').addEventListener('click', function() {
//         currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//         updateCarousel();
//     });

//     function updateCarousel() {
//         const offset = -currentIndex * 100;
//         images.forEach(img => {
//             img.style.transform = `translateX(${offset}%)`;
//         });
//     }
// });
