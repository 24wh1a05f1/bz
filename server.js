const express = require('express')
const app = express()
const port = 3002;
//web server
app.use(express.static('frontend'))
app.listen(port, function(){
    console.log(" successfully running at http://location:"+port)
   
})


