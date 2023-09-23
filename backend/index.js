const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/user");
const Product = require("./db/product");
// const Image = require("./db/image");
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(cors());


// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the directory where uploaded images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//Add products api
app.post("/add", upload.single('image'), async (req, resp) => {
  const { name, price, category, userId, company } = req.body;

  try {
    const { filename } = req.file; // Assuming 'filename' is the field name for the uploaded image

    // Create a new Product instance with image data
    const product = new Product({ name, price, category, userId, company,  filename });

    // Save the product with image data
    const result = await product.save();

    // Send a success response
    resp.status(200).json({ message: 'Product added successfully', product: result });
  } catch (error) {
    resp.status(500).json({ error: 'Error adding product' });
  }
});

// app.post("/add", async (req, resp) => {
//   let product = new Product(req.body);
//   let result = await product.save();
//   resp.send(result);
// });


//user register api
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

//login api
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user)
    } else {
      resp.send({ result: "not found" })
    }
  } else {
    resp.send({ result: "not found ..." })
  }
});


// list product api
app.get("/prolist", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No Product" });
  }
});

// delete product api
app.delete("/product/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// get singel product api
app.get("/product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record found" });
  }
});

// update product
app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

//search api
app.get("/search/:key", async (req, resp) => {
  try {
    const key = req.params.key;  //first change
    const results = await Product.find({
      $or: [
        { name: { $regex: key, $options: "i" } }, // second change $options: "i" for case-insensitive search
        { company: { $regex: key, $options: "i" } },
        { category: { $regex: key, $options: "i" } },
      ],
    });

    resp.send(results);
  } catch (error) {
    console.error("Error searching for products:", error);
    resp.status(500).send("Internal Server Error");
  }
});

// app.get("/search/:key", async (req, resp) => {
//   let result = await Product.findOne({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { company: { $regex: req.params.key } },
//       { category: { $regex: req.params.key } },
//     ],
//   });
//   resp.send(result);
// });


app.listen(5000);
