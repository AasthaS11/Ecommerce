const express = require("express");
// const {connectDB} = require("./src/config/db");
// import { connectDB } from "./src/config/db";
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");   
// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

const path = require("path");
const cors= require("cors");  
const { type } = require("os");
app.use(express.json());
app.use(cors())
const port = 8000;

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/ecomm");
    console.log(`connected with `, connection.host, connection.port);
  } catch (error) {
    console.log(error);
  }
};

connectDB();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const storage = multer.diskStorage(
  {
    destination: './upload/images',
    filename:(req, file, cb)=>{
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })

  const upload = multer({storage:storage})

  app.use('/images', express.static("upload/images"))
  //upload endpoint
  app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
      success:1,
      image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
  })

  //products schema

    const Product= mongoose.model("Product",{
      id:{
        type: Number,
        required :true
      },
      name:{
        type: String,
        required :true
      },
      image:{
        type: String,
        required:true
      },
      category:{
        type: String,
        required:true
      },
      new_price:{
        type: Number,
        required:true
      },
      old_price:{
        type: Number,
        required:true
      },
      date:{
        type: Date,
        default: Date.now()
      },
      available:{
        type: Boolean,
        default: true
      }
    })

    //addproduct adds a product to the collection
    app.post('/addproduct', async (req,res)=>{
      let products = await Product.find({});
      let id;
      if(products.length > 0){
        let last_product_array= products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;        //if id is not present then it is incremented from the last added products id
      }else{
         id=1;
      }

      const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category:req.body.category,
        new_price: req.body.new_price,
        old_price:req.body.old_price,
      })
      console.log(product)
      await product.save()
      console.log("Saved")
      res.json({
        success:true,
        name:req.body.name,
      })
    })

    //deletePRoduct api to delete the product if exists
    app.post('/removeproduct', async (req,res)=>{
      await Product.findOneAndDelete({id:req.body.id})
      console.log("removed")

      res.json({
        success:true,
        name:req.body.name
      })
    })


    //api to get all products together
    app.get('/allproducts', async(req,res)=>{
      let products = await Product.find({})
      console.log("fetched all")
      res.send(products)
    }
  )

app.listen(process.env.PORT || port, async () => {
  console.log(`Server is connect to ${process.env.PORT || port}`);
  await connectDB();
});