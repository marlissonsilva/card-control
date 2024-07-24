import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Collection from "../core/Collection";

export default function useItem() {
  const router = useRouter();
  const repo = new Collection();

  const [items, setItem] = useState<any[]>();

  useEffect(() => {
    (async () => {
      getAll();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAll() {
    const data = await repo.getAll();
    if (data.status) {
      router.push("/");
      return;
    }
    setItem(data);
  }

  async function getById(id: string) {
    const product = await repo.getById(id);
    return product;
  }

  async function deleteItem(id: string) {
    await repo.delete(id);
    getAll();
  }

  async function saveItem(
    price: number,
    description: string,
    purchasedIn: string,
    responsable: string,
    status: boolean,
    id: string
  ) {
    await repo.save(price, description, purchasedIn, responsable, status, id);
    getAll();
  }

  return {
    items,
    saveItem,
    deleteItem,
    getAll,
    getById,
  };
}
