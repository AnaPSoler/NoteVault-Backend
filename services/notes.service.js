const { Note, Category } = require("../models");

const noteService = {
  getAll: async (userId) => {
    return await Note.findAll({
      where: { userId },
      include: {
        model: Category,
        as: "category",
        attributes: ["id", "name"],
      },
      order: [["createdAt", "DESC"]],
    });
  },

  create: async (data, userId) => {
    const { title, content, categoryId, priority } = data;

    if (!title || !content) throw new Error("Title and content are required");

    if (categoryId) {
      const exists = await Category.findByPk(categoryId);
      if (!exists) throw new Error("The selected category does not exist");
    }

    return await Note.create({ title, content, categoryId, priority, userId });
  },

  update: async (id, data, userId) => {
    const note = await Note.findOne({ where: { id, userId } });
    if (!note) throw new Error("Note not found or unauthorized");

    return await note.update(data);
  },

  delete: async (id, userId) => {
    const note = await Note.findOne({ where: { id, userId } });
    if (!note) throw new Error("Note not found or unauthorized");

    await note.destroy();
  },

  toggleArchive: async (id, userId) => {
    const note = await Note.findOne({ where: { id, userId } });
    if (!note) throw new Error("Note not found or unauthorized");

    note.isArchived = !note.isArchived;
    await note.save();
    return note;
  },
};

module.exports = noteService;
