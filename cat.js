document.addEventListener('DOMContentLoaded', function(){
const Theme = document.getElementById('themeSelect');
const ResetButton = document.getElementById('Button');
const Element = document.documentElement;
function setTheme(theme) {
    Element.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

window.addEventListener('load', function() {
    const save = localStorage.getItem("theme");
    if (save) {
        setTheme(save);
        Theme.value = save; 
    }
});

Theme.addEventListener("change", function() {
    setTheme(Theme.value);
});

ResetButton.addEventListener("click", function() {
    localStorage.removeItem("theme");
    setTheme("light"); 
    Theme.value = "light"; 
});
});



function calculateCalories() {
  const wei = parseFloat(document.getElementById('weight').value);
  const act = parseFloat(document.getElementById('activity').value);
  const calor = parseFloat(document.getElementById('calories').value);
  const bmr = 70 * Math.pow(wei, 0.75);
  const Calories = bmr * act;
  const grams = (Calories / (calor / 100)).toFixed(2);
  if(grams >= 1){
  document.getElementById('result').innerText = `Необходимое количество корма в  день: ${grams} г`;}
    else{
    document.getElementById('result').innerText = `Заполните пожалуйста все поля для ответа`;
    }
}

document.getElementById('catTest').addEventListener('submit', function(event) {
            event.preventDefault();
            let score = {
                'Персидская': 0,
                'Мейн-кун': 0,
                'Сиамская': 0,
                'Британская короткошерстная': 0,
                'Русская голубая': 0,
                'Шотландская вислоухая': 0,
                'Абиссинская': 0,
                'Бенгальская': 0,
                'Сфинкс': 0,
                'Норвежская лесная': 0,
                'Манчкин': 0,
                'Рэгдолл': 0
            };

            if (document.querySelector('input[name="q1"]:checked').value === 'активный') {
                score['Мейн-кун'] += 1;
                score['Сиамская'] += 1;
                score['Абиссинская'] += 1;
                score['Бенгальская'] += 1;
                score['Сфинкс'] += 1;
                score['Норвежская лесная'] += 1;
                score['Манчкин'] += 1;
                 } 
                 else {
                score['Британская короткошерстная'] += 1;
                score['Русская голубая'] += 1;
                score['Персидская'] += 1;
                score['Шотландская вислоухая'] += 1;
                score['Рэгдолл'] += 1;
            }

            if (document.querySelector('input[name="q2"]:checked').value === 'длинная') {
                score['Персидская'] += 1;
                score['Мейн-кун'] += 1;
                score['Норвежская лесная'] += 1;
                score['Рэгдолл'] += 1;
            } 
            else if (document.querySelector('input[name="q2"]:checked').value === 'средняя') {
                score['Шотландская вислоухая'] += 1;
            } 
            else {
                score['Бенгальская'] += 1;
                score['Манчкин'] += 1;
                score['Сфинкс'] += 1;
                score['Русская голубая'] += 1;
                score['Абиссинская'] += 1;
                score['Сиамская'] += 1;
                score['Британская короткошерстная'] += 1;
            }

             if (document.querySelector('input[name="q3"]:checked').value === 'много') {
                score['Персидская'] += 1;
                score['Норвежская лесная'] += 1;
             }
             else if (document.querySelector('input[name="q2"]:checked').value === 'умеренно') {
                score['Мейн-кун'] += 1;
                score['Шотландская вислоухая'] += 1;
                score['Рэгдолл'] += 1;
             }
             else{
                score['Сиамская'] += 1;
                score['Британская короткошерстная'] += 1;
                score['Русская голубая'] += 1;
                 score['Абиссинская'] += 1;
                 score['Бенгальская'] += 1;
                 score['Сфинкс'] += 1;
                 score['Манчкин'] += 1;
             }

              if (document.querySelector('input[name="q4"]:checked').value === 'да') {
                score['Мейн-кун'] += 1;
                score['Сиамская'] += 1;
                score['Абиссинская'] += 1;
                score['Бенгальская'] += 1;
                score['Сфинкс'] += 1;
                score['Норвежская лесная'] += 1;
                score['Манчкин'] += 1;
                 } 
                 else {
                score['Британская короткошерстная'] += 1;
                score['Русская голубая'] += 1;
                score['Персидская'] += 1;
                score['Шотландская вислоухая'] += 1;
                score['Рэгдолл'] += 1;
            }

            if (document.querySelector('input[name="q5"]:checked').value === 'высокий') {
                score['Мейн-кун'] += 1;
                score['Сиамская'] += 1;
                score['Шотландская вислоухая'] += 1;
                score['Абиссинская'] += 1;
                score['Бенгальская'] += 1;
                score['Сфинкс'] += 1;
                score['Манчкин'] += 1;
                score['Рэгдолл'] += 1;
             }
             else if (document.querySelector('input[name="q5"]:checked').value === 'умеренный') {
                score['Персидская'] += 1;
                score['Русская голубая'] += 1;
                score['Норвежская лесная'] += 1;
             }
             else{
                score['Британская короткошерстная'] += 1;
             }

             if (document.querySelector('input[name="q6"]:checked').value === 'дружелюбный') {
                score['Мейн-кун'] += 1;
                score['Сиамская'] += 1;
                score['Абиссинская'] += 1;
                score['Бенгальская'] += 1;
                score['Сфинкс'] += 1;
                score['Манчкин'] += 1;
                score['Рэгдолл'] += 1;
                score['Персидская'] += 1;
                score['Норвежская лесная'] += 1;
             }
             else{
                score['Русская голубая'] += 1;
                score['Британская короткошерстная'] += 1;
                score['Шотландская вислоухая'] += 1;
             }

            let maxScore = -1;
            let bestBreeds = [];

            for (let breed in score) {
                if (score[breed] > maxScore) {
                    maxScore = score[breed];
                    bestBreeds = [breed];
                } else if (score[breed] === maxScore) {
                    bestBreeds.push(breed);
                }
            }

            document.getElementById('res').innerText = `Вам подходит: ${bestBreeds.join(', ')}!`;
        });