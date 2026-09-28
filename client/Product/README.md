# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






// E-commerce project 
step-1 firstly i make app.js file in which i import express in router variable i store express
step-2 i create server import app file and app.listen function in which we give port number and on whic our server is running and start the server
ste-3 setup for authentication 
step-4 in authentication process firstly i make the route file in which in import the express then i make router variable in which i make express.Router
ste-5 create one router for registeration for user for which i make router.post to create the user for which i use the /register route
step-6 in app.js file make middleware app.use(express.json()) for convert the json in to string format and one more middleware for authentication which 
 is app.use(/api/auth) so that user hit that firstly that api the register route will be hit
 step-7 make a schema for storing the data of user in which firstly we create the .env for storing the key for our database in which i create MONGO_URI for storing the database string
 step-8 Then i make config folder in which i make a setup for my schema in which firstly i create my db.js file in config folder to connect with database and one more file in config folder is config.js in which i use my environmental variable in a single object 
 step-9 one more folder i create which is model in which i make auth.model.js for creating the schema in which i store the name,email,password,refreshToken
 and create a authModel for schema model is basically a folder i can say in which i store the user data
 step-10 i make a folder that is validator in which make firstly npm i express-validator the i form validation in my user data 
 step-11 i create a folder that is controller which i use in auth.route.js in my controller firsly i make registerController in which i make 

creation of register controller 
step 1  from req.body get the name,email,password
step-2 check the email in auth.model.js to check the user is already exist aur not if already exist the give the error with status 409 user already exist and return the res
step-3 if it is new user the save the data in authModel througth which data can be store in database 
step-4 generate the accessToken and refreshToken which install the npm i jsonwebtoken 
step-5 for generating the accesstoken and refreshToken we make the utils folder in which i make the utils file for generating and verify the both the tokens  by sending the userid and role 
step-6 after generating the accesstoken i save the refreshToken in cookies and in database and send the accesstoken in a res 
step-7 send the res with status 201 which means user data is created and i send the res in which i send the message user created successfully the data is objet in which i send the user data with accesstoken 
step-8 this registercontrller i use in /register route


createion of logincontroller 
step 1  from req.body get the email,password
step-2 check the email in auth.model.js to check the user is email exist aur and the email not match with email that store in database  then give the error with status 400 and with message  email and password is invalid and return the res and also check the passowrd if password is wrong the also send the same message so that we confuse the hacker to not exactly found the error is whether the email is wrong or the password
step-4 generate the accessToken and refreshToken 
step-5  generating the accesstoken and refreshToken  by sending the userid and role 
step-6 after generating the accesstoken i save the refreshToken in cookies and in database and send the accesstoken in a res 
step-7 send the res with status 201 which means user data is created and i send the res in which i send the message user created successfully the data is object in which i send the user data with accesstoken 
step-8 this logincontrller i use in /login route in routes folder


 creaion of currentusercontroller 
 step-1 check th user accesstoken and which contain userid and role
 step-2 on that bases we check in database if user found i send the res of user detail
 creation of refreshcontroller

step 1  from req.cookies get the refreshToken
step-2 check the refreshToken agar refreshToken nahi milta hai then give the error with status 401 and with message unauthorized and return the res
step-3 verifyRefreshToken() ka use karke refreshToken ko verify karte hain aur usme se userId aur role get karte hain
step-4 userId ke basis par database mein user ko find karte hain
step-5 database mein jo refreshToken store hai usko cookie se aaye refreshToken ke saath compare karte hain
step-6 agar database ka refreshToken aur cookie ka refreshToken match nahi karta hai then database se refreshToken ko remove kar dete hain aur 401 status ke saath invalid refresh token ka message send karte hain
step-7 agar refreshToken valid hai then generateToken() ka use karke new accessToken aur new  refreshToken generate karte hain
step-8 new refreshToken ko cookies mein save karte hain aur new accessToken ko response mein send karte hain
step-9 response mein status 200 send karte hain jisme message refresh token created successfully aur new accessToken send karte hain
step-10 agar refreshToken verify karte time koi error aata hai then 401 status ke saath unauthorized user or invalid user` ka message send karte hain
step-11 is refreshTokenController ko /refresh route mein use karte hain in routes folder











































