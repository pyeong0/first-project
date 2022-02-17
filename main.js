let currencyRation= {
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40,
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1,
        unit:"동"
    }
}
let fromCurrency = "USD";

// 1. console.log(currencyRation.USD.unit);
// 2. console.log(currencyRation['VND']['unit'])

document.querySelectorAll("#from-currency-list a")
.forEach((menu) =>menu.addEventListener("click",function(){
    //1. 버튼을 가져온다  document.getElementById("from-button")
    //2. 버튼에 값을 바꾼다
    document.getElementById("from-button").textContent=this.textContent;

    //3. 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;

})
);


let toCurrency = "USD";

document.querySelectorAll("#to-currency-list a").forEach((menu) 
=>menu.addEventListener("click",function(){

    document.getElementById("to-button").textContent=this.textContent; 

    toCurrency= this.textContent;


})
);
