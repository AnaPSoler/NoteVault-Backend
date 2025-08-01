const { Category, Note } = require("../models");

const getAllCategories = async (req, res) => {
  try {
    const userId = req.user.id;
    const categories = await Category.findAll({
      where: { userId },
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories", error: err });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    if (!name || !userId) {
      return res.status(400).json({ message: "Name or userId is missing" });
    }

    const existing = await Category.findOne({
      where: { name, userId },
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "This category already exists for the user" });
    }

    const newCategory = await Category.create({ name, userId });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Failed to create category", error: err });
  }
};

const getNotesByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const category = await Category.findOne({
      where: { id, userId },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const notes = await Note.findAll({
      where: { categoryId: id, userId },
    });

    res.json(notes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch notes filtered by category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const category = await Category.findOne({
      where: { id, userId },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.destroy();
    res
      .status(200)
      .json({ message: "The category has been successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "An error occurred while deleting the category",
        error: err,
      });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getNotesByCategory,
  deleteCategory,
};
