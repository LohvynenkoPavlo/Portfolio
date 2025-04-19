const category = prompt('Введіть категорію (A, B, C)').toUpperCase()

switch (category) {
    case 'A':
        alert("Мотоцикл");
    break;
    case 'B':
        alert("Легковий автомобіль");
    break;
    case 'C':
        alert("Вантажний автомобіль");
    break;
    default:
        alert("Невідома категорія");
}