const https = require("https");


//Function to print message
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}


function getProfile(username){
    const request = https.get(
        `https://teamtreehouse.com/profiles/${username}.json`,
        (response) => {
			let body = '';
            response.on('data', data =>{
				//Concatenate the string and tranform it to a string
				body += data.toString(); 
            })
			response.on('end', ()=>{
				//this will print our body string
                let profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.JavaScript);
			})
        });
}
//We call our function
console.dir(process);
const users = process.argv.slice(2);
users.forEach(getProfile);