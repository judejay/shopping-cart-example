import http from "../http-common";


class ProductDataService {
  async getAll() {
   const response = await fetch("https://0cf937f5-a71f-4b17-9a50-5895d739c295.mock.pstmn.io/products"
   //,
  //     {
  //       method: "GET",
  //       mode: "no-cors",
  //       cache: "no-cache",
  //       credentials: "omit",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // redirect: "follow", // manual, *follow, error
  //       referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     }
  );
   //console.log("response",response)
   return await response.json()
   ;
  }
}


export default new ProductDataService;
