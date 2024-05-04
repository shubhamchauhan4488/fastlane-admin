// controllers/itemController.js

import { ItemModel } from "../models/item.js";

export const createItem = async (req, res) => {
    console.log('contoller: createItem')
    const { id, name, price, quantity } = req.body; 
    try {
        await ItemModel.createItem({ id, name, price, quantity });
        res.status(201).json({message: "Resource created"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const fetchAllItems = async (req, res) => {
    console.log('contoller: fetchAllItems')
    try {
        const items = await ItemModel.getAllItems(req, res);
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getItem = async (req, res) => {
    console.log('contoller: getItem')
    try {
        const item = await ItemModel.getItemById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

