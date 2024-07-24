import Request from "./Request";

export default class Collection {
  async save(
    price: number,
    description: string,
    purchasedIn: string,
    responsable: string,
    status: boolean,
    id: string
  ) {
    let data;
    if (id) {
      data = await Request.put(`/purchase/${id}`, {
        price: Number(price),
        description,
        purchasedIn,
        responsable,
        status,
        id,
      });
      return data;
    } else {
      data = await Request.post("/purchase/create", {
        price: Number(price),
        description,
        purchasedIn,
        responsable,
        status,
      });
    }
    return data;
  }

  async delete(id: string) {
    const data = await Request.delete(`/purchase/${id}`);
    return data;
  }

  async getAll() {
    const data = await Request.get(`/purchase/list`);
    return data;
  }

  async getById(id: string) {
    const data = await Request.get(`/purchase/${id}`);
    return data;
  }
}
