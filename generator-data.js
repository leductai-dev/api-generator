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
        categories: [
            {
                "categoryID": "c1",
                "title": "Rau",
                "totalProduct": 10,
                "photo": "https://klbtheme.com/groci/wp-content/uploads/2018/08/1-4-62x62.jpg",
                "description": "Rau sạch chất lượng",
                "createdAt": "2021-08-26T10:23:18.011Z",
                "updatedAt": "2021-08-26T10:23:18.011Z"
            },
            {
                "categoryID": "c2",
                "title": "Thit",
                "totalProduct": 10,
                "photo": "https://klbtheme.com/groci/wp-content/uploads/2018/08/11-2-62x62.jpg",
                "description": "Thịt đã được kiểm định",
                "createdAt": "2021-08-26T10:23:18.011Z",
                "updatedAt": "2021-08-26T10:23:18.011Z"
            },
            {
                "categoryID": "c3",
                "title": "Hải sản",
                "totalProduct": 10,
                "photo": "https://klbtheme.com/groci/wp-content/uploads/2018/08/11-2-62x62.jpg",
                "description": "Hải sản tươi sống",
                "createdAt": "2021-08-26T10:23:18.011Z",
                "updatedAt": "2021-08-26T10:23:18.011Z"
            }
            ,{
                "categoryID": "c4",
                "title": "Đồ hộp",
                "totalProduct": 10,
                "photo": "https://klbtheme.com/groci/wp-content/uploads/2018/08/5-2-62x62.jpg",
                "description": "Các thực phẩm đã được chế biến",
                "createdAt": "2021-08-26T10:23:18.011Z",
                "updatedAt": "2021-08-26T10:23:18.011Z"
            },
        ],
     
        products: [
            {
                "productID": "P1",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Cải thìa thủy canh",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 23000,
                "minPrice": 20000,
                "photos": [
                    "assest/cai_thia_thuy_canh"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/7-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C1",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P2",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Cải thìa Đà Lạt",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 25000,
                "minPrice": 25000,
                "photos": [
                    "assest/cai_thia_da_lat"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/9-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C1",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P3",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Cải bó xôi",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 20000,
                "minPrice": 18000,
                "photos": [
                    "assest/cai_bo_xoi"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/1-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C1",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P4",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Hành lá",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 20000,
                "minPrice": 20000,
                "photos": [
                    "assest/hanh_la"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/2-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C2",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P5",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Gà thả vườn",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 130000,
                "minPrice": 100000,
                "photos": [
                    "assest/ga_tha_vuon"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/11-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C5",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P6",
                "companyID": "com1",
                "storeID": "store1",
                "title": "gà công nghiệp",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/cai_thia_thuy_canh"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/12-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C5",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P7",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Gà Đông tảo",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/ga_dong_tao"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/4-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C5",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P8",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Thịt ba chỉ",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/thit_ba_chi"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/5-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C4",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P9",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Thịt nạt xay",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/thit_nat_xay"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/7-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C2",
                "subCategories": "sub_C4",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P10",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Cá hộp ba cô gái",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/ca_hop_ba_co_gai"
                ],
                "thumbNail": "https://klbtheme.com/groci/wp-content/uploads/2018/08/7-1-170x185.jpg",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C4",
                "subCategories": "sub_C10",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P11",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Thit heo hai lát",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/thit_heo_hai_lat"
                ],
                "thumbNail": "",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C4",
                "subCategories": "sub_C10",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P12",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Hành boro Hàn Quốc",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/hanh_boro_han_quoc"
                ],
                "thumbNail": "",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C2",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P13",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Sup lơ xanh Đà Lạt",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/sub_lo_xanh_da_lat"
                ],
                "thumbNail": "",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C3",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P14",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Búp cải thảo",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/bup_cai_thao"
                ],
                "thumbNail": "",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C1",
                "subCategories": "sub_C3",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
            {
                "productID": "P15",
                "companyID": "com1",
                "storeID": "store1",
                "title": "Cá nục Ninh Thuận",
                "description": "Sản phẩm sạch đảm bảo chất lượng",
                "price": 230000,
                "minPrice": 200000,
                "photos": [
                    "assest/ca_nuc_ninh_thuan"
                ],
                "thumbNail": "",
                "type": "tươi sạch",
                "tag": "",
                "quantity": "10",
                "categories": "C3",
                "subCategories": "sub_C7",
                "origin": "",
                "properties": {},
                "trademark": "",
                "createdBy": "person1",
                "createdAt": "",
                "updatedAt": ""
            },
     
        ]
    }

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generator data successfully!");
    });
})();
