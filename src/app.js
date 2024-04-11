import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";

import productsRouter from "./routers/products.router.js";
import cartsRouter from "./routers/carts.router.js";
import views from "./routers/views.js";
import __dirname from "./utils.js";
import { dbConnection } from "./database/config.js";
import { productModel } from "./models/products.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// app.get("/", (req, res) => {
//   return res.render("home");
// });

app.use("/", views);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

await dbConnection();

const expressServer = app.listen(PORT, () => {
  console.log(`Ejecutando aplicacion en puerto ${PORT}`);
});

const io = new Server(expressServer);

io.on("connection", async (socket) => {
  const productos = await productModel.find();
  socket.emit("productos", productos);

  socket.on("agregarProducto", (producto) => {
    const newProduct = productModel.create({ ...producto });
    if (newProduct) {
      productos.push(newProduct);
    }
    socket.emit("productos", productos);
  });
});
