const express=require("express")
const app=express()

app.use(Allbook)
app.use(onebook)

app.get('/book/:name', (req,res)=>{
    const book= req.params.name;
    return res.json({bookName: book});
});
function Allbook(req,res,next){
    console.log("fetching all book")
next()

}
function onebook(req,res,next){
next()

}


    app.listen(3100, ()=>{
console.log("listening at 3100")

    });