import { pool } from "../db.js";

export const createLikesmodels = async (titulo, img, descripcion, likes) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *",
      [titulo, img, descripcion, likes]
    );
    return (result.rows[0]);
  } catch (error) {
    throw new Error("Error creating likes: " + error.message);
  }
};

export const getAllLikes = async () => {
  try {
    const allLikes = await pool.query("SELECT * FROM posts");
    
    return allLikes.rows;
  } catch (error) {
    throw new Error("Error getting likes: " + error.message);
  }
};
