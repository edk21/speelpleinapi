const express = require("express");
const app = express();
require("dotenv").config({ path: "./config.env" });
const cors = require("cors");

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//get driver conenction
const dbo = require("./db/conn");

app.listen(PORT, () => {
    dbo.connectToServer(function(err){
        if(err) console.error(err)
    });
    console.log(`Server Running on port ${PORT}`)
});