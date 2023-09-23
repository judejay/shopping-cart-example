import http from "../http-common";


class ProductDataService {
  async getAll() {
   const response = await fetch("https://0cf937f5-a71f-4b17-9a50-5895d739c295.mock.pstmn.io/products"
   );
   return await response.json()
   ;
  }
}


export default new ProductDataService;
