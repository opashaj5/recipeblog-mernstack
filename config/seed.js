require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Cookware', sortOrder: 5 },
        { name: 'Dinnerware', sortOrder: 10 },
        { name: 'Bakeware', sortOrder: 15 },
        { name: 'Cook Book', sortOrder: 20 },
        { name: 'T-Shirts', sortOrder: 30 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        { name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95 },
        { name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95 },
        { name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95 },
        { name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95 },
        { name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95 },
        { name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95 },
        { name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95 },
        { name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95 },
        { name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95 },
        { name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95 },
        { name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95 },
        { name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95 },
        { name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95 },
    ]);

    console.log(items)

    process.exit();

})();