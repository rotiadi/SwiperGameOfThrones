const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',

      renderBullet: function (index, className) {
        const images = [
          './img/image1.png',
          './img/image2.png',
          './img/image3.png',
          './img/image4.png',
          './img/image5.png',
          './img/image6.png',
          './img/image7.png',
          './img/image8.png',
          './img/image9.png',
        ];
        
        return `<span class="${className} img-bullet"><img src="${images[index]}" alt="bullet"></span>`;
      }
    },
  

  });


  const myTest = document.querySelector('.swiper');
  const myWrapper = document.querySelector(".swiper-wrapper");
  const myPagination = document.querySelector(".swiper-pagination")

  myWrapper.style.paddingLeft = '758px';

/*   myPagination.style.paddingLeft ='158px';
  myPagination.style.paddingTop = '143px'; */
  myPagination.style.width = "500px"

  const myBullets = document.querySelectorAll('.swiper-pagination-bullets');

  myBullets.forEach(bullet => {
    bullet.addEventListener('click', (event) => {
        bullet.style.opacity = '1'
        console.log(bullet.children)
    })
    
  });

  document.querySelectorAll('.img-bullet').forEach(elem => {
    elem.style.width = '153px';
    elem.style.height = '152px';
  })