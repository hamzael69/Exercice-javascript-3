let x = ""
let resultat = "";

for (let i = 1; i <= 5; i+=1) {
    let star = "";
  
    for (let x = 0; x < i; x+=1) {
      star += "*";
    }
   resultat += star + "\n"
  }
  
  console.log(resultat);