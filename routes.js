const express = require("express");
const router = express.Router();
const pool = require("./db");

// Dodaj notatkę
router.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await pool.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Pobierz wszystkie notatki
router.get("/notes", async (req, res) => {
  try {
    const allNotes = await pool.query("SELECT * FROM notes");
    res.json(allNotes.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Pobierz notatkę o danym id
router.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);

    if (note.rows.length === 0) {
      return res.status(404).json("Note not found");
    }

    res.json(note.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Aktualizuj notatkę o danym id
router.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await pool.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );

    if (updatedNote.rows.length === 0) {
      return res.status(404).json("Note not found");
    }

    res.json(updatedNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Usuń notatkę o danym id
router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await pool.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedNote.rows.length === 0) {
      return res.status(404).json("Note not found");
    }

    res.json({ message: "Note deleted", note: deletedNote.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
