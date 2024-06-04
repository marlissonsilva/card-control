import Request from "./Request";

export default class Collection {
  async save(
    name: string,
    price: number,
    description: string,
    purchasedIn: string,
    responsable: string,
    id: string
  ) {
    let data;
    if (id) {
      data = await Request.put(`/purchase/${id}`, {
        name,
        price,
        description,
        purchasedIn,
        responsable,
        id,
      });
      return data;
    } else {
      data = await Request.post("/purchase", {
        name,
        price,
        description,
        purchasedIn,
        responsable,
      });
    }
    return data;
  }

  async delete(id: string) {
    const data = await Request.delete(`/purchase/${id}`);
    return data;
  }

  async getAll() {
    const data = await Request.get(`/purchase`);
    return data;
  }

  async getById(id: string) {
    const data = await Request.get(`/purchase/${id}`);
    return data;
  }
}
