
// function generatetoken(){
//     let str = "";
//     for(let i=0; i<16; i++){
//         str +=   String.fromCharCode  (Math.floor(Math.random() * 89) + 33); //33 to 122
//     }
  
//     return str;
//   }

//   let ans = generatetoken();
//   console.log(ans);

  function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
  }
  
  // Call the function to generate the access token
//   const accessToken = generateAccessToken();
//   console.log(accessToken);
console.log("hi")