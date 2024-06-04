import useItem from "@/hooks/useItem";
import {IconEdit, IconTrash} from "@tabler/icons-react";
import Link from "next/link";
interface CardProps {}

export default function Card(props: CardProps) {
  const {items, deleteItem} = useItem();
  function currentFormat(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function renderData() {
    if (!items || items.length === 0) {
      return <p className="text-center text-white">Nenhum item cadastrado.</p>;
    }

    return items.map((item, i) => {
      return (
        <div
          key={item._id}
          className={`
          flex items-center justify-between p-4 rounded-md 
          ${i % 2 === 0 ? "bg-zinc-300" : "bg-zinc-200"}`}
        >
          <div className="text-left">
            <h3 className="text-lg">
              Nome: <span className="text-2xl font-medium ">{item.name}</span>
            </h3>
            <p className="text-lg">
              Preço:{" "}
              {
                <span className="text-2xl font-semibold">
                  {currentFormat(item.price)}
                </span>
              }
            </p>
            <p className="text-lg ">
              Descrição: <span className="font-medium">{item.description}</span>
            </p>
            <p className="text-lg ">
              Comprado em:{" "}
              <span className="font-medium">{item.purchasedIn}</span>
            </p>
            <p className="text-lg ">
              Responsável:{" "}
              <span className="font-medium">{item.responsable}</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-red-600 hover:bg-red-400 rounded-full p-1 cursor-pointer">
              <IconTrash size={30} onClick={() => deleteItem(item._id)} />
            </div>
            <Link
              href={`/Edit/${item._id}`}
              className="text-blue-700 hover:bg-blue-400 rounded-full p-1"
            >
              <IconEdit size={30} />
            </Link>
          </div>
        </div>
      );
    });
  }
  return <div>{renderData()}</div>;
}
