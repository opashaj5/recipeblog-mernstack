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
    ]);

    console.log(items)

    process.exit();

})();