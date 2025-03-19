window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});


const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 3, 
  centeredSlides: true, 
  loop: true,
  spaceBetween: 10, 
  slideToClickedSlide: true,
  on: {
      init: function () {
          this.slides.forEach((slide, index) => {
              slide.style.transform = 'scale(0.6)'; 
              slide.style.opacity = '0.5'; 
          });
          this.slides[this.activeIndex].style.transform = 'scale(1.2)'; 
          this.slides[this.activeIndex].style.opacity = '1'; 
      },
      slideChange: function () {
          const slides = document.querySelectorAll('.hero-slider .swiper-slide');
          slides.forEach((slide, index) => {
              slide.style.transform = 'scale(0.6)';
              slide.style.opacity = '0.5';
          });

          const activeSlide = slides[this.activeIndex];
          activeSlide.style.transform = 'scale(1.2)';
          activeSlide.style.opacity = '1';


      }
  },
});



// Trending Slider
const trendingSlider = new Swiper('.swiper-trending', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
});

const Cards = new Swiper('.swiper-cards', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

});
const Gbooks = new Swiper('.swiper-gbooks', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});

function scrollToNonFict() {
  const target = document.getElementById("nonfict");
  if (target) {
      target.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error("Element with ID 'nonfict' not found.");
  }
}

function scrollToClassic() {
  const target = document.getElementById("classic");
  if (target) {
      target.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error("Element with ID 'nonfict' not found.");
  }
}
function scrollToFantasy() {
  const target = document.getElementById("fantasy");
  if (target) {
      target.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error("Element with ID 'nonfict' not found.");
  }
}
function scrollToAction() {
  const target = document.getElementById("action");
  if (target) {
      target.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error("Element with ID 'nonfict' not found.");
  }
}





function saveBookDetails(bookId) {
  const books = {
    1: {
      title: "I Want to Die But I Want to Eat Tteokbokki",
      author: "Baek Se-Hee",
      synopsis: "I Want to Die But I Want to Eat Tteokbokki follows the story of a young woman, struggling with severe depression and a sense of hopelessness. Despite her emotional turmoil and overwhelming desire to end it all, one thought keeps her tethered to life: her love for Tteokbokki, a spicy Korean rice cake dish that reminds her of better days.<br><br>In the midst of her darkest times, she finds comfort and small moments of joy in the simple act of eating Tteokbokki, a dish that represents both her craving for life’s pleasures and the weight of her emotional struggles. As she navigates her daily battles with mental health, she begins to form connections with people who help her realize that there is still value in life, no matter how fleeting those moments may seem. <br> <br> The story poignantly explores themes of mental health, hope, and finding meaning in the midst of despair, all while highlighting the power of food and small comforts to bring light during the darkest of times."
  },
  
    2: {
      title: "Crime and Punishment",
      author: "Franz Kafka",
      synopsis: "Gregor Samsa, a traveling salesman, wakes up one morning to discover he has transformed into a giant insect-like creature. Struggling to adapt to his grotesque new form, he becomes increasingly alienated from his family and society. Initially horrified, his family tries to care for him but gradually grows resentful and embarrassed by his presence. <br> <br>As Gregor’s condition deteriorates, his family’s attitudes shift from pity to hostility. They confine him to his room, and he becomes isolated, physically and emotionally. The story reaches its climax when Gregor overhears his family wishing for his death. In despair, he retreats to his room and succumbs to his condition. <br> <br>His death brings a sense of relief to his family, who begin to envision a hopeful future without him. Kafka’s novella explores themes of alienation, identity, and the dehumanizing effects of modern life."
    }
  };

  if (books[bookId]) {
    localStorage.setItem('bookDetails', JSON.stringify(books[bookId]));
    window.location.href = 'book-description.html';
  } else {
    console.error("Book not found!");
  }
}


// Ambil data buku dari localStorage
const book = JSON.parse(localStorage.getItem('bookDetails'));

// Jika data buku ada, tampilkan di halaman
if (book) {
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('book-author').textContent = `Penulis: ${book.author}`;
  document.getElementById("book-synopsis").innerHTML = book.synopsis;

} else {
  // Jika tidak ada data, tampilkan pesan kesalahan
  document.getElementById('book-title').textContent = "Buku tidak ditemukan";
  document.getElementById('book-author').textContent = "";
  document.getElementById('book-synopsis').textContent = "";
}

