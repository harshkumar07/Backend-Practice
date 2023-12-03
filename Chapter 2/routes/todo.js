const express = require("express");
const router = express.Router();

// Import controller
const { createTodo } = require("../controllers/createTodo");

// Define API routes
router.post("/createTodo", createTodo);

// Corrected export statement
module.exports = router;
