
const extractNumbers = (str) => {
    return str
        .split('')
        .filter(char => !isNaN(char) && char !== ' ')
        .map(Number);

};
console.log(extractNumbers("a1fg5hj6"));

const sum = (n) => {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
};

console.log(sum(5));
console.log(sum(10));

const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Перебираем продукты и выводим title каждого
        products.forEach(product => {
            console.log(product.title);
        });

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
};

fetchProducts();

const container = document.querySelector('div');


container.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent.trim();
        document.body.style.backgroundColor = color;
    }
});
const square = document.getElementById('square');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        square.style.display = 'none';
        button.textContent = 'Показать';
    }
});

const counter = document.getElementById('counter');
let count = 0;

const intervalId = setInterval(() => {
    count++;
    counter.textContent = count;
    if (count >= 100) {
        clearInterval(intervalId);
    }
}, 1);
