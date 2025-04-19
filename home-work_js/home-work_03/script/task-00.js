const childrenName_01 = prompt('Введіть ім`я дитини 1')
const childrenName_02 = prompt('Введіть ім`я дитини 2')

const amountOfCandy_01 = parseInt(prompt('ввести кількість цукерок дитини 1'))
const amountOfCandy_02 = parseInt(prompt('ввести кількість цукерок дитини 2'))

if (amountOfCandy_01 >  amountOfCandy_02) 
  alert(`У ${childrenName_01} більше цукерок`)
else if (amountOfCandy_01 <  amountOfCandy_02) 
  alert(`У ${childrenName_02} більше цукерок`)
else (amountOfCandy_01 ===  amountOfCandy_02) 
  alert(`кількість однакова`)
