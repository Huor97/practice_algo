const number1 = 60,
    number2 = 15,
    number3 = -5;

let result;

result = number1+number2
console.log(result)

result = number1-number2
console.log(result)

result = number1*number2
console.log(result)

result = number1/number2
console.log(result)

result = number1%number2
console.log(result)
console.log("-------------------------")


result=Math.round(3.6)
console.log(result)
result=Math.round(3.5)
console.log(result)
result=Math.round(3.4)
console.log(result)
console.log("-------------------------")

result = Math.ceil(3.5)
console.log(result)
result = Math.floor(3.5)
console.log(result)
console.log("-------------------------")

result = Math.sqrt(3.5)
console.log(result)
result = Math.pow(10, 5)
console.log(result)
console.log("-------------------------")

result = 10 + 15 * 2
console.log(result)
result = (10 + 15) * 2
console.log(result)
console.log("-------------------------")

let pourcent = 35
const myCart = (20 + 54 + 62 + 5 + 10 + 15 + 100)
let discount = (myCart / 100) * pourcent //35%
discount = Number (discount).toFixed(2)
result = myCart - discount;

console.log("prix de total de vos achats :"+myCart+"eurous")
console.log("vous béneficiez de"+pourcent+"%"+"sur votr comand")
console.log(`prix total après la réduction de ${pourcent}% soit ${discount}eurous en moins sur votre facture`)
console.log(`Reste A payer ${result}eurous`)



