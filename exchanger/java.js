class money {
    constructor(antal, moneyform){
    this.antal = antal
    this.moneyform = moneyform
    }
}
/**
 * exChange
 * in: belop som ska växlas
 * out: antal sedlar eller mynt 
 */
function exChange(belop, sedl) {
    return Math.floor(belop / sedl)
}
/**
 * getExchangeArray
 * in inbetalt beloop
 * out: array innerhåler antal mynt i varje valör
 */
function getExchangeArray(pay, price) {
    let antal_mynt = 0
    let money_back = 0
    sedlar_mynt_array = []
    //500-------------------------------
    money_back = pay - price
    antal_mynt = exChange(money_back, 500)
    money_back = money_back % 500
   


let t_money = new money(0, 500)


if (antal_mynt > 0) {
    t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

 console.log(`t_money = ${antal_mynt}` )

     //100-------------------------------
     antal_mynt = exChange(money_back, 100)
     money_back = money_back % 100
    
 
 
 t_money = new money(0, 100)
 
 
 if (antal_mynt > 0) {
     t_money.antal = antal_mynt
 }
 
 sedlar_mynt_array.push(t_money)
 
 console.log(`t_money = ${antal_mynt}` )

  //50-------------------------------
  antal_mynt = exChange(money_back, 50)
  money_back = money_back % 50
 


t_money = new money(0, 50)


if (antal_mynt > 0) {
  t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

console.log(`t_money = ${antal_mynt}` )

 //20-------------------------------
 antal_mynt = exChange(money_back, 20)
 money_back = money_back % 20



t_money = new money(0, 20)


if (antal_mynt > 0) {
 t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

console.log(`t_money = ${antal_mynt}` )

 //10-------------------------------
 antal_mynt = exChange(money_back, 10)
 money_back = money_back % 10



t_money = new money(0, 10)


if (antal_mynt > 0) {
 t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

console.log(`t_money = ${antal_mynt}` )

 //5-------------------------------
 antal_mynt = exChange(money_back, 5)
 money_back = money_back % 5



t_money = new money(0, 5)


if (antal_mynt > 0) {
 t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

console.log(`t_money = ${antal_mynt}` )

 //1-------------------------------
 antal_mynt = exChange(money_back, 1)
 money_back = money_back % 1



t_money = new money(0, 1)


if (antal_mynt > 0) {
 t_money.antal = antal_mynt
}

sedlar_mynt_array.push(t_money)

console.log(`t_money = ${antal_mynt}` )
}

const input_price = document.getElementById("price");
const input_inbet = document.getElementById("inbet");
const svardiv = document.getElementById("svar_div");
const kalkButton = document.getElementById("kalk_button")
kalkButton.addEventListener("click", kalkyleraClick)
function kalkyleraClick() {
    let t_price = parseInt(input_price.value)
    let t_inbet = parseInt(input_inbet.value)
    getExchangeArray(t_inbet, t_price)
    //console.log(`click`)
}