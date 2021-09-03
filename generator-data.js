const { fake } = require("faker");
var faker = require("faker");
var fs = require("fs");
//set ngon ngu
faker.locale = "en";


const randomCategoryList = (animalList) => {
    const categoriesList = [];
    for (let value of animalList) {
        const category = {
            id: faker.datatype.uuid(),
            name: value,
            image: faker.image.animals(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        categoriesList.push(category);
    }
    return categoriesList;
};

const randomProductList = (categories, n) => {
    const productList = [];
    categories.map(({ id ,name}) => {
        for (let i = 0; i < n; i++) {
            const product = {
                "id": faker.datatype.uuid(),
                "categoryId": id,
                "name": faker.animal[name](),
                "species" : name,
                "food": faker.lorem.words(),
                "weight": Number.parseFloat(faker.commerce.price()),
                "speed": Number.parseFloat(faker.commerce.price()),
                "image": faker.image.animals(),
                "description": faker.lorem.sentence(),
                "createdAt": Date.now(),
                "updatedAt": Date.now(),
            };
            productList.push(product);
        }
    });
    return productList;
};
/* function randomProductList(){
    return []
} */

const animalList = ["dog","cat","lion","bear","horse","bird","cow","rabbit"];
const categories = randomCategoryList(animalList);
const products = randomProductList(categories, 100);

(() => {
    const db = {
        categories: categories,
        products: products,
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generator data successfully!");
    });
})();
