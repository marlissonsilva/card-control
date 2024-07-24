import moment from "moment-timezone";
import {
  IconEdit,
  IconList,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
interface CardProps {
  alterarAmount(value: number): void;
  deleteItem: (id: string) => void;
  data: any;
}

export default function Card(props: CardProps) {
  const totalPrices = props.data?.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  );
  props.alterarAmount(totalPrices);

  function currencyFormat(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function dateFormat(date: string) {
    const dateISO = moment.tz(date, "UTC");
    const reverseDate = moment(dateISO).format("DD-MM-YYYY");
    return reverseDate;
  }

  function renderData() {
    if (props.data?.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center gap-4 h-96 text-zinc-100">
          <IconList size={100} stroke={1.2} />
          <p>Você não tem nada registrado!</p>
          <p>
            Clique em <span className="font-medium underline">Adicionar</span> e
            faça seu registro
          </p>
        </div>
      );
    }

    return (
      !props.data ||
      props.data.map((item: any, i: number) => {
        return (
          <div
            key={item._id}
            className={`
          flex items-center justify-between p-4 rounded-md
          bg-blue-200`}
          >
            <div className="text-left">
              <p className="text-lg">
                Preço:{" "}
                {
                  <span className="text-2xl font-semibold">
                    {currencyFormat(item.price)}
                  </span>
                }
              </p>
              <p className="text-lg ">
                Descrição:{" "}
                <span className="font-medium">{item.description}</span>
              </p>
              <p className="text-lg ">
                Comprado em:{" "}
                <span className="font-medium">
                  {dateFormat(item.purchasedIn)}
                </span>
              </p>
              <p className="text-lg ">
                Responsável:{" "}
                <span className="font-medium">{item.responsable}</span>
              </p>
              <p>
                Status:{" "}
                {item.status ? (
                  <span className="bg-green-950  text-green-400 px-3 py-1 rounded-md text-sm">PAGA</span>
                ) : (
                  <span className="bg-yellow-950  text-yellow-400 px-3 py-1 rounded-md text-sm">ABERTA</span>
                )}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-red-500 hover:bg-red-950 rounded-full p-2 cursor-pointer">
                <IconTrash
                  size={30}
                  onClick={() => props.deleteItem(item._id)}
                />
              </div>
              <Link
                href={`/Edit/${item._id}`}
                className="text-blue-600 hover:bg-blue-950 rounded-full p-2"
              >
                <IconEdit size={30} />
              </Link>
            </div>
          </div>
        );
      })
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{renderData()}</div>
  );
}
