// function challenge1(){
//     if (document.getElementById("subscribe").checked == true){
//         console.log('this works');
//         document.querySelector("#emailDiv").style.display = "Initial";}
//     else{
//         document.querySelector("#emailDiv").style.display = "none";
//     }
    
// }

function challenge2(){
    console.log('this works')
    let email = document.querySelector("#email");
    let home = document.querySelector("#home");
    if(document.querySelector("#sameAddress").checked){
        home.value = email.value;
        home.disabled = true;
    }else{
    home.value = "";
    home.disbaled = false;
    }
}

document.querySelector("#subscribe").addEventListener("click", function () {
        if(this.checked){
            document.querySelector("#emailDiv").style.display = "block";
        }else{
            document.querySelector("#emailDiv").style.display = "none";
        }
});