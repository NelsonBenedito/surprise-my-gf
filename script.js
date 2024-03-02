var buttonDodge = document.getElementById("try-catch-me");
var count = 0;

buttonDodge.addEventListener("mouseenter", dodge);
buttonDodge.addEventListener("mouseout", reaparecer);

function dodge() {
  buttonDodge.style.opacity = "0";
  count = count + 1;
  switch (count) {
    case 1:
      alert("Sério? eu sou tão legal");
      break;
    case 2:
      alert("Sério? eu sou tão legal");
      break;
    case 3:
      alert("Por favorzin aceita");
      break;
    case 4:
      alert("Você não tem escolha aceita logo");
      break;
    default:
      alert("posso insistir pra sempre...");
      break;
  }
  //   if (count >= 2) {
  //     alert("Você não tem escolha aceita logo");
  //   }
}
function reaparecer() {
  buttonDodge.style.opacity = "100";
}
