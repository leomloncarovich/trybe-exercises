let statusAprovado = "Dale"

switch (statusAprovado){
  
  case "aprovado":
    console.log("Parabéns, você está no grupo de pessoas aprovadas!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovado":
    console.log("Infelizmente, você foi reprovado!")
    break;


  default:
    console.log("Informação incorreta")
}