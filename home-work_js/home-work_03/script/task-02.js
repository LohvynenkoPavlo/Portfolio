alert('A number from 1 to 5 is randomly generated. Try to guess the number in 2 attempts.')

const chosenNumber_01 = parseInt(prompt('Number one'))
const chosenNumber_02 = parseInt(prompt('Number two'))

let random = Math.floor(Math.random() * 5) + 1
if (  chosenNumber_01 < 1 || chosenNumber_01 > 5 ||
    chosenNumber_02 < 1 || chosenNumber_02 > 5)
    alert('invalid number enter from 1 to 5')
else if ((chosenNumber_01 || chosenNumber_02) === random)
    alert(`Mystery number ${random}  You Win!!!`)
else alert(`Mystery number ${random}  You Lost!!!`)

