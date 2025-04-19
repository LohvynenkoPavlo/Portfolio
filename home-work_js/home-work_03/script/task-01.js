const price = parseFloat(prompt('Enter the price of the product'))
const money = parseFloat(prompt('Enter the amount of money'))

if (price > money)
    alert('no money no sale :)')
else if (money - price >= 4)
alert('You can buy another lottery for 4 UAH')
else alert('Done')

