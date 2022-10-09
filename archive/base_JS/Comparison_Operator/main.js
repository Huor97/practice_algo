const
    number1 = 100,
    number2 = '200',
    number3 = 'cent';
let number;

console.log(number1 + number2, number3)
console.log(number1 * number2, number3)
console.log(number2 - number1)
console.log(number2)
console.log(Number (number2))
console.log(parseInt (number2))
console.log("---------------------")

number = Number('234')
console.log(number)
number = Number('234.4533')
console.log(number)
number = Number(true)
console.log(number)
number = Number(false)
console.log(number)
number = Number(null)
console.log(number)
number = Number('HelloWorld')
console.log(number)
number = Number([1, 2, 3, 4, 5])
console.log(number)
number = Number(undefined)
console.log(number)
console.log("------------------------")

number = parseInt('234')
console.log(number)
number = parseInt('234.400')
console.log(number)

number = parseFloat('234')
console.log(number)
number = parseFloat('234.400')
console.log(number)

console.log(2>1);
console.log(2<1);
console.log('A'<'a')
console.log(2 == '2');
console.log(2 == '3')
console.log(2 === '2')

console.log(typeof 2)
console.log(typeof '2')

console.log(1==1) //true
console.log(1 != 1) //false
console.log(1 !== 1) //false
console.log(1 != "1") //false
console.log(1 !== "1") //true
console.log('rouh' !== 'rouh') //false
console.log(' rouh' !== 'rouh') //true

console.log(null == undefined) //true
console.log(null === undefined) //false




