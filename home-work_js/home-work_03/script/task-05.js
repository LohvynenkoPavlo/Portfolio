const dayNumber = parseInt(prompt("Введіть номер дня тижня (1-7)"))

switch (dayNumber) {
  case 1:
    alert("Понеділок");
    break;
  case 2:
    alert("Вівторок");
    break;
  case 3:
    alert("Середа");
    break;
  case 4:
    alert("Четвер");
    break;
  case 5:
    alert("П’ятниця");
    break;
  case 6:
    alert("Субота");
    break;
  case 7:
    alert("Неділя");
    break;
  default:
    alert("Неправильний номер дня")
}
