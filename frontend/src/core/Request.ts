import {useRouter} from "next/router";

export default class Request {
  static headers: any = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  public router = useRouter();

  static port: number = 4000;
  static urlBase: string = `http://localhost:${this.port}`;

  static addToken(token: string) {
    Request.headers = {...Request.headers, Authorization: `Bearer ${token}`};
    return;
  }

  static deleteToken() {
    delete Request.headers.Authorization;
    return;
  }

  static async genericRequest(
    method: string,
    urlAddon: string,
    bodyData?: any
  ) {
    const data = await fetch(Request.urlBase + `${urlAddon}`, {
      method: method,
      headers: Request.headers,
      body: JSON.stringify(bodyData),
    });
    if (data.status !== 200) {
      return data;
    }
    const result = await data.json();
    return result;
  }

  static async get(urlAddon: string) {
    const result = await Request.genericRequest("GET", urlAddon);
    return result;
  }

  static async post(urlAddon: string, bodyData: any) {
    const result = await Request.genericRequest("POST", urlAddon, bodyData);
    return result;
  }

  static async put(urlAddon: string, bodyData: any) {
    const result = await Request.genericRequest("PUT", urlAddon, bodyData);
    return result;
  }

  static async delete(urlAddon: string) {
    const result = await Request.genericRequest("DELETE", urlAddon);
    return result;
  }
}
