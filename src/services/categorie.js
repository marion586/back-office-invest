import { Http } from "./http";

export default class categorieService {
  static async addCategorie(params) {
    return await Http.post("/categorie/add", params);
  }
  static async getCategorie() {
    return await Http.get("/categorie");
  }
}
