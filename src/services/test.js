import { Http } from "./http";

export default class testService {
  static async login(params) {
    return await Http.post("/auth/connection", params);
  }
}
