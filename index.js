const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")

function genPassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random]
    }
    return password
}

function textPassword() {    
    passEl1.textContent = genPassword()
    passEl2.textContent = genPassword()
}

textPassword()