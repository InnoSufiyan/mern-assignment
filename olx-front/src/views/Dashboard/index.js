import { useState, useEffect } from "react";

import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import image from "../../images/1.JPG";

const Dashboard = (props) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [posts, setPosts] = useState([]);

  const [user, setUser] = useState("");

  const adPosts = [
    {
      product: "bike",
      price: 5000,
      quantity: 15
    }
  ]
  const [notesList, setNoteList] = useState([]);
  useEffect(async () => {
    try {
      
      const response = await axios.get("http://localhost:5000/posts")
      console.log(response)
      setNoteList(response.data)
      console.log(notesList)
    } catch (err) {
      console.log(err)
    }
  }, [])

  
  const checkBackend = async () => {
    try {
      
      const response = await axios.get("http://localhost:5000/posts")
      console.log(response)
      notesList = response.data;
      console.log(notesList)
    } catch (err) {
      console.log(err)
    }
  }
  

  

  
  return (
    <>
    <button onClick={checkBackend}>Click ME</button>
      <Link to="/">
        <button onClick="">Logout</button>
      </Link>
      <h1>Welcome {user}</h1>
      <input
        onChange={(e) => setProduct(e.target.value)}
        type="text"
        id="product"
        placeholder="Product Name"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        id="price"
        placeholder="Price"
      />
      <input
        onChange={(e) => setQuantity(e.target.value)}
        type="text"
        id="quantity"
        placeholder="Quantity"
      />

      <button onClick="">Post Ad</button>

      <div className="cards">

      {notesList.map((post) => {
        return (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Price : {post.price} </Button>
                <Button size="small">{post.quantity} pcs</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Dashboard;
