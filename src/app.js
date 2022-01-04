import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    console.log(response);

    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const {data:products} = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach(element => {
      console.log(element.name)
    });
    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts =  products.filter(word => word.name.includes("Şal")&&word.hasOwnProperty("image")&&word.hasOwnProperty("name"));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    const content = document.getElementById("content");
    mappedProducts.forEach(element => {
      var product='<div id ="content"><div class="product"><img width="128" height="128" src="'+element.image+'"><span  id ="item_name">'+element.name+'</span></div></div>';
   
      content.innerHTML+=product;
    });
  });
