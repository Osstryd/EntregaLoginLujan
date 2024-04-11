//nombre y contraseña de usuario
//ProyectoBackend | CoderCoder

import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ProyectoBackend:CoderCoder@cluster0.fn0cjxr.mongodb.net/ecommerce"
    );
    console.log("Base de datos online");
  } catch (error) {
    console.log(`Error al levantar la base de datos ${error}`);
    process.exit(1);
  }
};
