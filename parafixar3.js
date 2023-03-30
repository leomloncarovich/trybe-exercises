let nota = 68;

if (nota >= 80) {
  console.log("Parabéns, você faz parte do nosso grupo de pessoas aprovadas.");
} else if (nota < 80 && nota >= 60) {
  console.log("Você esta na nossa lista de espera");
} else if (nota < 60) {
  console.log("Infelizmente, você reprovou");
}
