import Amount from "@/components/Amount";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import useItem from "@/hooks/useItem";
import {useState} from "react";
export default function Dashboard() {
  const [amount, setAmount] = useState(0);
  const {items, deleteItem} = useItem();

  function currencyFormat(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function alterar(value: number) {
    setAmount(value);
  }

  return (
    <Layout title="Registros" className="min-h-[95vh]">
      <Amount
        width={items && items?.length}
        value={currencyFormat(amount)}
        className={items?.length === 0 ? "hidden" : "inline"}
      />
        <Card alterarAmount={alterar} data={items} deleteItem={deleteItem} />
    </Layout>
  );
}
