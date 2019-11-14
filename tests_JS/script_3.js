var num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

var count = 1
for(var pyramide = "#"; count+ 1 <=num; pyramide +="#" , count++){
    console.log(`${pyramide}`);
  }

  
  
  console.log(pyramide);
  console.log(count);