/**
 * Проверка синтаксиса
 * важность: 2
 * 
 * Каким будет результат выполнения этого кода?
 * 
 * let user = {
 *   name: "John",
 *   go: function() { alert(this.name) }
 * }
 * 
 * (user.go)()
 * 
 * P.S. Здесь есть подвох :)
 */ 
// выполнение завершится ошибкой
// Ошибка!

// Попробуйте запустить:


let user = {
  name: "John",
  go: function() { console.log(this.name) }
}

user.go() // убрать скобки(группировку) для корректной работы или после объекта user поставить точку с запятой (;)



/**
 * Объясните значение "this"
 * важность: 3
 * 
 * В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
 * 
 * Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
 * 
 * let obj, method;
 * 
 * obj = {
 *   go: function() { alert(this); }
 * };
 * 
 * obj.go();               // (1) [object Object]
 * 
 * (obj.go)();             // (2) [object Object]
 * 
 * (method = obj.go)();    // (3) undefined
 * 
 * (obj.go || obj.stop)(); // (4) undefined
 */
//теряется this