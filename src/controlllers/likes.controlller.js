import { createLikesmodels, getAllLikes } from "../models/like.models.js";

export const createLikes = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  
  try {
    const result = await createLikesmodels(titulo, img, descripcion, likes);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLike = async (req, res) => {
  try {
    const result = await getAllLikes();
    console.log("Geting posts");

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
