// // sneaks API
// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
// // import search from search
// // import * as SneaksAPI from "sneaks-api"

// exports.getProduct = async(request, response) => {
//     try {
//         //TODO
//         sneaks.getProducts("jordan 1"
//             `${shoeword}`, 10,
//             function(err, products) {
//                 console.log(products);
//                 // Send response
//                 response.status(200).json({
//                     status: "success",
//                     data: {
//                         products,
//                     },
//                 });
//             });
//     } catch (error) {
//         response.status(404).json({
//             status: "fail",
//             message: error.message,
//         });
//     }
// }; // product controller