const apiUrl = "https://api.thecatapi.com/v1/images/search";
const apiKey = "live_1UEbxpwZdY7ICUJvBPYq6ScmQtFOpscyA5TzldvCXac7p7DzXlMd2sMMv7XgM7Fr";

document.getElementById('random-btn').addEventListener('click', randomCat);/*случайная картинка*/

async function randomCat() {
    try {
        const response = await fetch(apiUrl, {
            headers: {'x-api-key': apiKey}
        });
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        const data = await response.json();
        displayCat(data[0]);
    } 
    catch (error) {
        console.error('Ошибка:', error);
    }
}

function displayCat(cat) {
    const catGallery = document.getElementById('cat-random');
    const img = document.createElement('img');
    img.src = cat.url;
    img.alt = 'Кошка';
    img.style.width = '500px';
    img.style.margin = '10px';
    catGallery.innerHTML = '';
    catGallery.appendChild(img);
}

document.addEventListener('DOMContentLoaded', function () { /*смена темы*/
    const Theme = document.getElementById('themeSelect');
    const ResetButton = document.getElementById('Button');
    const Element = document.documentElement;
    function setTheme(theme) {
        Element.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    window.addEventListener('load', function () {
        const save = localStorage.getItem("theme");
        if (save) {
            setTheme(save);
            Theme.value = save;
        }
    });

    Theme.addEventListener("change", function () {
        setTheme(Theme.value);
    });

    ResetButton.addEventListener("click", function () {
        localStorage.removeItem("theme");
        setTheme("light");
        Theme.value = "light";
    });
});

document.addEventListener('DOMContentLoaded', function () { /*добавить фото кошки*/
    const catList = document.getElementById('catList');
    const addCatBtn = document.getElementById('addCatBtn');

    addCatBtn.addEventListener('click', () => {
        const imageUrl = document.getElementById('catImage').value;
        if (imageUrl) {
            const catItem = document.createElement('div');
            catItem.innerHTML = `<img src="${imageUrl}">`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            deleteBtn.onclick = () => catList.removeChild(catItem);
            catItem.appendChild(deleteBtn);
            catList.appendChild(catItem);
            document.getElementById('catImage').value = '';
        }
    });
});

function calculateCalories() { /*калькулятор*/
    const wei = parseFloat(document.getElementById('weight').value);
    const act = parseFloat(document.getElementById('activity').value);
    const calor = parseFloat(document.getElementById('calories').value);
    const bmr = 70 * Math.pow(wei, 0.75);
    const Calories = bmr * act;
    const grams = (Calories / (calor / 100)).toFixed(2);
    if (grams >= 1) {
        document.getElementById('result').innerText = `Необходимое количество корма в  день: ${grams} г`;
    }
    else {
        document.getElementById('result').innerText = `Заполните пожалуйста все поля для ответа`;
    }
}