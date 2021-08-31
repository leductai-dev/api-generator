const { fake } = require("faker");
var faker = require("faker");
var fs = require("fs");
//set ngon ngu
faker.locale = "vi";

console.log(faker.image.animals);

const randomCategoryList = (n)=>{
    const categoriesList = []
    Array.from(new Array(n),()=>{
        const category = {
            'id': faker.datatype.uuid(),
            'name': faker.animal.dog(),
            'image':faker.image.animals(),
            'createdAt': Date.now(),
            'updatedAt': Date.now(),
        }
        categoriesList.push(category)
    })
    return categoriesList
};
const randomProductList = (categories,n)=>{
    const productList = []
     categories.map(({id})=>{
        for(let i = 0 ; i< n; i++){
            const product = {
                'id': faker.datatype.uuid(),
                'categoryId': id,
                'name': faker.animal.dog(),
                'image':faker.image.animals(),
                'price':Number.parseFloat(faker.commerce.price()),
                'createdAt': Date.now(),
                'updatedAt': Date.now(),
            }
            productList.push(product)
        }
    })
    return productList
}
/* function randomProductList(){
    return []
} */
    const categories = randomCategoryList(10);
     const products = randomProductList(categories,10);

(() => {
    const db = {
        categories: categories,
        products: products,
        profile: {
            name: "po",
        },
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generator data successfully!");
    });
})();
