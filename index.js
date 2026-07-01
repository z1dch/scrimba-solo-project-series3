const characterVariable = [
  // Lowercase
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',

  // Uppercase
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',

  // Numbers
  '0','1','2','3','4','5','6','7','8','9',

  // Symbols
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+',
  '[',']','{','}',
  '|',';',':',"'",'"',
  ',', '.', '<', '>', '?', '/', '`', '~', '\\'
];

const generatedPassword1 = document.getElementById('generated-password1');
const generatedPassword2 = document.getElementById('generated-password2');

function generatePassword() {
    let password1 = "";
    let password2 = "";
    const passwordLength = 15;
    
    for (let i = 0; i < passwordLength; i++) {

        let randomIndex1 = Math.floor(Math.random() * characterVariable.length);
        password1 += characterVariable[randomIndex1];

        let randomIndex2 = Math.floor(Math.random() * characterVariable.length);
        password2 += characterVariable[randomIndex2];
    }

    generatedPassword1.textContent = password1;
    generatedPassword2.textContent = password2;
}