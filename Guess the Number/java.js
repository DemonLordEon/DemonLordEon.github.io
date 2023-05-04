const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissningar = 0;

console.log("slumptal: " + slumptal)
function gissaTal() {
    console.log("click")
    let textfelt_gissa = dokument.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let vinn = false;
    let svar =document.getElementById("svar");
    
    console.log("textfelt=" + textfelt_gissa) 
    if (antalgissningar <3) {
        if (slumptal === gissa_int) {
            console.log('RÄTT! antalgissningar= $(antalgissningar)')
            vinn = true;
            svar.innerHTML= 'YOUR A WINER!!';
            antalgissningar = 3;
        
        }
   else{
    console.log('FEL antalgissningar= $(antalgissningar)');
    if (antalgissningar === 2)
    svar.innerHTML='LOSER!';
    else
    svar.innerHTML='$(textfel_gissa) är FEL gissningar nr $(antalgissningar+1) av 3';
    document.getElementById("guess").value="";
    document.getElementById("guess").focus();
    } 
antalgissningar++;
} 
  else{
    svar.innerHTML='LOSER';
  }
    
}

