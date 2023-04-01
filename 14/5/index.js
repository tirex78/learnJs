/**
 * Побитовый оператор и значение
 * важность: 5
 * 
 * Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?
 * 
 * alert( 123 ^ 0 ); // 123
 * alert( 0 ^ 123 ); // 123
 * alert( ~~123 ); // 123 // два раза(обратное преобразование), поэтому результат тот же
 */

// Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба)
console.log( 123 ^ 0 ); // 123
console.log( 0 ^ 123 ); // 123
// Побитовое НЕ вызванное два раза приведет к результату до преобразования
console.log( ~~123 ); // 123 


/**
 * Проверка, целое ли число
 * важность: 3
 * 
 * Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
 * 
 * Например:
 * 
 * alert( isInteger(1) ); // true
 * alert( isInteger(1.5) ); // false
 * alert( isInteger(-0.5) ); // false
 */

// В JavaScript побитовые операторы ^ , & , | выполняются после сравнений == поэтому num ^ 0 берем в скобки
const isInteger = num => (num ^ 0) === num

console.log( isInteger(1) ); // true
console.log( isInteger(1.5) ); // false
console.log( isInteger(-0.5) ); // false

/**
 * Симметричны ли операции ^, |, &?
 * важность: 5
 * 
 * Верно ли, что для любых a и b выполняются равенства ниже?
 * 
 *     (a ^ b) == (b ^ a)
 *     (a & b) == (b & a)
 *     (a | b) == (b | a)
 * 
 * Иными словами, при перемене мест – всегда ли результат останется тем же?
 */

// Исходя из таблицы истинности, можно сделать вывод, что для любых a и b равенства выполняются


/**
 * Почему результат разный?
 * важность: 5
 * 
 * Почему результат второго alert'а такой странный?
 * 
 * alert( 123456789 ^ 0 ); // 123456789
 * alert( 12345678912345 ^ 0 ); // 1942903641
 */

// JS хранит цисла в 64 битном формате
// Операнды преобразуются в 32-битные целые числа, представленные последовательностью битов.
// Дробная часть, если она есть, отбрасывается.
// При преобразовнии в двочный вид число получает ненулевые старшие биты, соответсвенно число изменится