const app= require("./app.js");
const dotEnv= require("dotenv").config();


app.listen(dotEnv.process.PORT, ()=>{
    
});