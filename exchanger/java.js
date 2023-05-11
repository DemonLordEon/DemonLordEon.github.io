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
    console.log(`antal = ${antal_mynt}` )

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