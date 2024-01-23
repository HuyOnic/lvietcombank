bill=document.querySelector(".bill");
input=document.querySelector(".input");
submit=document.querySelector(".vcb__containter--btn");
home = document.querySelector(".vcb__header--home")
saveBil = document.querySelector(".vcb__descrription--btn")
saveBillButton = document.querySelector(".vcb__descrription--circle")
// let bill_id = generateRandom()
// document.querySelector('#bill-id').value = bill_id
var checkBill = 0;

bill.style.display="none";
console.log(submit)
// Event
submit.addEventListener("click",function(){
        bill.style.display="flex";
        input.style.display="none";
});
home.addEventListener("click",function(){
        bill.style.display="none";
        input.style.display="flex";
});

saveBil.addEventListener("click",function(){
        if(checkBill==0){
                saveBil.style.backgroundColor="var(--primary-color)";
                saveBillButton.style.transform="translateX(22px)";
                checkBill=1;
        }
        else{
                saveBil.style.backgroundColor="transparent";
                saveBillButton.style.transform="translateX(0px)";
                checkBill=0;
        }
});
// Get_Value
bank = document.querySelector(".vcb__containter--bank-select");
// nameBank = bank.options[bank.selectedIndex].text;

taker = document.querySelector(".vcb__containter--name-account");
id = document.querySelector(".vcb__containter--number-account");

money = document.querySelector(".vcb__containter--money");
description = document.querySelector(".vcb__containter--description");
navbar = document.querySelector(".vcb__header--bill");

// Add_Value_to_Bill
const date = new Date();
submit.addEventListener("click",function(){
        const date2 = new Date();
        function Minutes(min){
                return (AddChar0(min) + min);
        }
        function Hours(){
                return (AddChar0(date.getHours()) + date.getHours());
        }
        function Month(){
                return (AddChar0(date.getMonth()+1) + (date.getMonth()+1));
        }
        function theDate(){
                return (AddChar0(date.getDate()) + date.getDate());
        }
        function AddChar0(input){
                if(input<10){
                        return "0";
                }
                else{
                        return "";
                }
        }
        if(bank.options[bank.selectedIndex].text!="VIETCOMBANK")
        {
                // Money
                navbar = document.querySelector(".vcb__header--bill");
                liMoney = document.createElement("div");
                liMoney.classList.add("money");
                liMoney.appendChild(document.createTextNode(money.value+" VND"));
                navbar.appendChild(liMoney);
                // Date Time
                liDate = document.createElement("div");
                liDate.classList.add("date");
                liDate.appendChild(document.createTextNode(Hours()+":"+Minutes(date2.getMinutes())+" "+Day()+" "+theDate()+"/"+Month()+"/"+date.getFullYear()));
                navbar.appendChild(liDate);
                //Name
                ulName = document.querySelector(".name"); //ul
                liName = document.createElement("li"); //li
                liName.classList.add("nameTXT");
                liName.appendChild(document.createTextNode(taker.value))
                ulName.appendChild(liName);
                //ID
                ulid = document.querySelector(".id"); //ul
                liid = document.createElement("li"); //li
                liid.classList.add("idTXT");
                liid.appendChild(document.createTextNode(id.value))
                ulid.appendChild(liid);
                // BANK NAME
                nameBank = bank.options[bank.selectedIndex].text;
                ulbank = document.querySelector(".bank"); //ul
                libank = document.createElement("li"); //li
                libank.classList.add("bankname");
                libank.appendChild(document.createTextNode(nameBank));
                ulbank.appendChild(libank);
                // DESCRIPTION
                uldescription = document.querySelector(".description"); //ul
                lidescription = document.createElement("li"); //li
                lidescription.classList.add("descriptionTXT");
                lidescription.appendChild(document.createTextNode(description.value))
                uldescription.appendChild(lidescription);
        }
        else{
                // Money
                navbar = document.querySelector(".vcb__header--bill");
                liMoney = document.createElement("div");
                liMoney.classList.add("money");
                liMoney.appendChild(document.createTextNode(money.value+" VND"));
                navbar.appendChild(liMoney);
                // Date Time
                liDate = document.createElement("div");
                liDate.classList.add("date");
                liDate.appendChild(document.createTextNode(Hours()+":"+Minutes()+" "+Day()+" "+theDate()+"/"+Month()+"/"+date.getFullYear()));
                navbar.appendChild(liDate);
                //Name
                ulName = document.querySelector(".name"); //ul
                liName = document.createElement("li"); //li
                liName.classList.add("nameTXT");
                liName.appendChild(document.createTextNode(taker.value))
                ulName.appendChild(liName);
                //ID
                ulid = document.querySelector(".id"); //ul
                liid = document.createElement("li"); //li
                liid.classList.add("idTXT");
                liid.appendChild(document.createTextNode(id.value))
                ulid.appendChild(liid);

                // DESCRIPTION
                uldescription = document.querySelector(".description"); //ul
                lidescription = document.createElement("li"); //li
                lidescription.classList.add("descriptionTXT");
                lidescription.appendChild(document.createTextNode(description.value))
                uldescription.appendChild(lidescription);
        }
});
// Function
function Day(){
        switch(date.getDay()){
                case 0:
                        return "Chủ Nhật";
                        break;
                case 1:
                        return "Thứ Hai";
                        break;
                case 2:
                        return "Thứ Ba";
                        break;
                case 3:
                        return "Thứ Tư";
                        break;
                case 4:
                        return "Thứ Năm";
                        break;
                case 5:
                        return "Thứ Sáu";
                        break;
                case 6:
                        return "Thứ Bảy";
                        break;                     
        }
}
function generateRandom(min = 2000000000, max = 9000000000) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}
