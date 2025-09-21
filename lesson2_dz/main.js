// DZ 1 — анимация блока

const blockElem = document.getElementById("block");

let x = 0, y = 0;
let direction = "right";

const moveBlockToEnd = () => {
    blockElem.style.left = x + "px";
    blockElem.style.top = y + "px";

    switch (direction) {
        case "right":
            if (x < 400) {
                x++;
            } else {
                direction = "down";
            }
            break;
        case "down":
            if (y < 400) {
                y++;
            } else {
                direction = "left";
            }
            break;
        case "left":
            if (x > 0) {
                x--;
            } else {
                direction = "up";
            }
            break;
        case "up":
            if (y > 0) {
                y--;
            } else {
                direction = "right";
            }
            break;
    }

    requestAnimationFrame(moveBlockToEnd);
};

moveBlockToEnd();


// DZ 2 — Таймер + фильмы

const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        bannerImage: "https://occ-0-2567-2568.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcSJqJhmFc2b01Ipd6f_hSzUJw14-O8sZev6nYZv2J_BGle1JpgFchVnJlAa7sQrRQSQuVcUcaiyfWnaM4EgMBzy8xyJUJyCXEIK.jpg"
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Action",
        rating: 8.7,
        bannerImage: "https://upload.wikimedia.org/wikipedia/tr/3/36/Matrix-film.jpg"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Adventure",
        rating: 8.6,
        bannerImage: "https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        bannerImage: "https://i.pinimg.com/736x/d7/e6/d1/d7e6d1128af050e5e722591ab39b7867.jpg"
    },
    {
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        rating: 8.5,
        bannerImage: "https://miro.medium.com/v2/resize:fit:960/1*CUVKYytYBi6YRdHqwolMKA.jpeg"
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        bannerImage: "https://upload.wikimedia.org/wikipedia/kk/thumb/c/ca/%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D1%82%D0%B5%D0%BD_%D2%9B%D0%B0%D1%88%D1%83.webp/500px-%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D1%82%D0%B5%D0%BD_%D2%9B%D0%B0%D1%88%D1%83.webp.png"
    }
];

const countdown = (time) => {
    const countdownElem = document.getElementById("countdown");

    const interval = setInterval(() => {
        countdownElem.textContent = `⏱️ Time left: ${time} seconds`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            countdownElem.textContent = "✅ Countdown finished!";
        }
    }, 1000);
};

const renderMovies = () => {
    const container = document.getElementById("movie-container");

    movies.forEach(movie => {
        const movieElem = document.createElement("div");
        movieElem.className = "movie";

        movieElem.innerHTML = `
            <img src="${movie.bannerImage}" alt="${movie.title}" width="150" />
            <div class="movie-info">
                <h3>${movie.title} (${movie.year})</h3>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>
            </div>
        `;

        container.appendChild(movieElem);
    });
};

countdown(60);
renderMovies();
