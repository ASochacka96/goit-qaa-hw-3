function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


// Ad.1 Tworzenie Tablic
const fruits = ['Jabłko', 'Banan', 'Pomarańcza', 'Winogrona', 'Arbuz'];

console.log(fruits); 


// Ad.2 Iteracja po Tablicach
const numbers = [1, 3, 5, 7, 8, 9, 14, 15, 17, 234];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}
