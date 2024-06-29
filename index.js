function createString(greetings, sample) {
  let joinString = sample.join(""); //Метод join() объединяет все элементы массива в строку.
  return greetings.replace(RegExp(`[${joinString}]`, "gi"), ""); //Метод replace осуществляет поиск и замену частей строки. Первым параметром принимается "RegExp"- регулярное выражение, а вторым - подстрока, на которую заменяем.
}
console.log(createString("Hello World", ["l", "d"]));

