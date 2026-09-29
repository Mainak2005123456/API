 
const express = require('express');

const router = express.Router();

const Category = require('../models/categoryModel');


// GET - Get all categories
router.get('/', async (req, res) => {

    try {

        const allCategories = await Category.find();

        res.json(allCategories);

    } catch (err) {

        res.json({ message: err.message });

    }

});


// POST - Add a new category
router.post('/', async (req, res) => {

    try {

        const newCategory = new Category(req.body);

        const save = await newCategory.save();

        res.json(save);

    } catch (err) {

        res.json({ message: err.message });

    }

});


// PUT - Update category
router.put('/:id', async (req, res) => {

    try {

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedCategory) {

            return res.status(404).json({
                message: "Category not found"
            });

        }

        res.json(updatedCategory);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


// DELETE - Delete category
router.delete('/:id', async (req, res) => {

    try {

        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {

            return res.status(404).json({
                message: "Category not found"
            });

        }

        res.json({
            message: "Category deleted successfully",
            data: deletedCategory
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


module.exports = router;
