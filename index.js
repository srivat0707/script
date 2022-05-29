const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is up and running on ${PORT} ...`);
});

// Main Code Here //
// Generating JWT
app.get("/user/generateToken", (req, res) => {
    jwt.sign({user:3},"my_scret_key@",(err,token)=>{
        res.json({
            data:"my own ",
            token:token,
        })
    })
	
});

// Verification of JWT
app.get("/user/validateToken", (req, res) => {
	// Tokens are generally passed in header of request
	// Due to security reasons.
  // while send request send with authorization headders
    const bearer= req.headers['authorization'];
    const b= bearer.split("")
    req.token=b[1];
	// let tokenHeaderKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozLCJpYXQiOjE2NTM3NTgyMjl9.0rfFJheuiXEJ3-pGSDrD6-NEsdmjp0ZaVWcUz2mkuPQ";
	let jwtSecretKey = "my_scret_key@";

	try {
		// const token = req.header(tokenHeaderKey);
        // console.log(token);
		jwt.verify(res.token, jwtSecretKey,()=>{
            res.json({message:"Successfully Verified"});
        });
	} catch (error) {
		// Access Denied
		return res.status(401).send(error);
	}
});


// const express = require('express')
// // const bodyParser = require('body-parser')

// // Create a new instance of express
// const app = express()

// // Tell express to use the body-parser middleware and to not parse extended bodies
// app.use(express.json());

// // Route that receives a POST request to /sms
// app.post('/sms', function (req, res) {
//   const body = req.body
//   console.log(body.data);
// })

// // Tell our app to listen on port 3000
// app.listen(3000, function (err) {
//   if (err) {
//     throw err
//   }

//   console.log('Server started on port 3000')
// })