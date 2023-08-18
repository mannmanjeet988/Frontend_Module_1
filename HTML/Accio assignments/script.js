console.log("hi")

function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
  }
  
  //Call the function to generate the access token
  const accessToken = generateAccessToken();
  console.log(accessToken);

  