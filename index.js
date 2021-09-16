const express = require("express");
const app = express();
const porta = 3456

app.use(express.static("public"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req,res)=>{res.render("index.ejs");});

app.get("/afeganistao", (req, res)=>{res.render("afeganistao/index.ejs");});

app.get("/afeganistao/noticia", (req, res)=>{res.render("afeganistao/noticia/index.ejs");});

app.listen(porta, ()=>{console.log("Está funcionando corretamente")})