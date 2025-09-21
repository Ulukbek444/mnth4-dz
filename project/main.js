const bannerElem = document.querySelector(".banner__wrapper");
const moviesWithBanner = movies.filter((movie) => movie.bannerImage);
const buttonPrevElem = document.querySelector(".banner .arrow-prev");
const buttonNextElem = document.querySelector(".banner .arrow-next");

let bannerI = 0;
let interval;


const setBanner = () => {
  bannerElem.style.backgroundImage = `url(${moviesWithBanner[bannerI].bannerImage})`;
};


const slideNext = () => {
  bannerI = (bannerI + 1) % moviesWithBanner.length;
  setBanner();
};


const slidePrev = () => {
  bannerI = (bannerI - 1 + moviesWithBanner.length) % moviesWithBanner.length;
  setBanner();
};


const autoSlide = () => {
  interval = setInterval(slideNext, 3000);
};


const resetAutoSlide = () => {
  clearInterval(interval);
  autoSlide();
};


buttonNextElem.addEventListener("click", () => {
  slideNext();
  resetAutoSlide();
});

buttonPrevElem.addEventListener("click", () => {
  slidePrev();
  resetAutoSlide();
});


setBanner();
autoSlide();
const moviesWrapperElem = document.querySelector(".movies__inner");

movies.forEach((movie, i) => {
  moviesWrapperElem.innerHTML += `
    <div id="movie${i}" class="movie">
      <div class="movie__image" style="background-image: url('${movie.cardImage}')">
        <div class="rating">${movie.rating}</div>
      </div>
      <div class="movie__info">
        <h3>${movie.name}</h3>
        <div class="stars">
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star-empty.png" alt="" />
        </div>
        <p>${movie.description}</p>
        <div class="movie__item">
          <span class="movie__item-title">Дата выхода:</span>
          <span>${movie.releaseDate}</span>
        </div>
        <div class="movie__item">
          <span class="movie__item-title">Жанр</span>
          <span>${Array.isArray(movie.genres) ? movie.genres.join(", ") : movie.genres}</span>
        </div>
      </div>
    </div>`;
});
