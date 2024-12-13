// ЗАДАНИЕ 1
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: 
// Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)


// const name = prompt('Введите ваше имя:')
// // alert('Привет, ' + name + '!')
// alert(`Привет, ${name}!`)


// Задание 2
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

// const num = +prompt('Введите число:')
// const power = +prompt('Введите степень числа:')
// console.log(num ** power)


// let num = 30
// num = num + 1 // 30 + 1
// num += 1
// num++

// let num2 = 40
// num2 = num2 + 5
// num2 += 5

// ЗАДАНИЕ 4
// let text = "some text"
// if(text === 'some text') { // 'some text' === 'some text'
//     text = 'another text'
// }
// else {
//     text = 'some text'
// }

// console.log(text)


// ЗАДАНИЕ 5
// let num = 2
// if (num === 0) { // 2 === 0
//     num = 1
// }
// else if (num < 0) { // 2 < 0
//     num = "less than zero"
// }
// else if (num > 0) { // 2 > 0
//     // num = num * 10
//     num *= 10
// }

// console.log(num)

// const name = prompt('Введите ваше имя:')

// ЗАДАНИЕ 6

// const num = +prompt('Введите число:') // '45' => 45
// let result

// if(num < 5) { // 7 < 5
//     result = '0'
// }
// else {
//     result = '1'
// }

// console.log('Result: ' + result)


// ЗАДАНИЕ 7
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')

// if(num1 > num2) {
//     console.log(`Большее число: ${num1}`)
// }
// else if (num2 > num1) {
//     console.log(`Большее число: ${num2}`)
// }
// else {
//     console.log('Числа равны')
// }

// ЗАДАНИЕ 8
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')

// if (num1 % num2 === 0) {
//     console.log(`Число ${num1} кратная к числу ${num2}`)
// }
// else {
//     console.log(`Число ${num1} не кратная к числу ${num2}`)
// }


// ЗАДАНИЕ 9
// const mark = +prompt('Введите ваш средний балл от 1 до 10:')

// if(mark >= 1 && mark <= 4) {
//     console.log('Двоечник, иди учись!')
// }
// else if (mark >= 5 && mark <= 8) {
//     console.log('Неплохо, но давай еще поднажмем!')
// }
// else if(mark >= 9 && mark <= 10) {
//     console.log('Ого, да ты настоящий отличник!')
// }
// else {
//     console.log('Некорректные данные. Пожалуйста введите число от 1 до 10')
// }


// ЗАДАНИЕ 10
// const exam = +prompt('Введите балл за экзамен (от 0 до 100):')
// const projects = +prompt('Введите количество выполненных проектов (от 0 и больше):')

// let result
// if (exam > 90 || projects > 10) {
//     result = 100
// }
// else if (exam > 75 && projects >= 5) {
//     result = 90
// }
// else if (exam > 50 && projects >= 2) {
//     result = 75
// }
// else {
//     result = 0
// }

// console.log(`Итоговая оценка: ${result}`)


// ЗАДАНИЕ 11
// const rentDays = +prompt('На сколько дней вы арендуете машину?')
// let sum = rentDays * 40

// if (rentDays >= 7) {
//     sum -= 50
// }
// else if (rentDays >= 3) {
//     sum -= 20
// }

// console.log(`Общая сумма аренды составила ${sum}$`)


const rentalDays = prompt("На сколько дней вы хотите арендовать автомобиль?");
const dailyRate = 40; 
let discount = 0;
if (rentalDays >= 7) {
  discount = 50; 
}
else if (rentalDays >= 3) {
  discount = 20; 
}
const totalCost = rentalDays * dailyRate - discount;
console.log(`Общая стоимость аренды: $${totalCost}`);