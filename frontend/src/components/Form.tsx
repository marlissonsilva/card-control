import {useEffect, useState} from "react";
import Button from "./Button";
import Input from "./Input";
import useItem from "@/hooks/useItem";
import {useRouter} from "next/router";

interface FormProps {
  id?: string;
}

export default function Form(props: FormProps) {
  const router = useRouter();
  const {saveItem, getById} = useItem();
  const id = props.id ?? "";
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [purchasedIn, setPurchasedIn] = useState("");
  const [responsable, setResponsable] = useState("");

  useEffect(() => {
    (async () => {
      if (props.id) {
        const item = await getById(props.id);
        setName(item.name);
        setPrice(item.price);
        setDescription(item.description);
        setPurchasedIn(item.description);
        setResponsable(item.description);
      }
    })();
  }, []);

  return (
    <div className="w-[95vw] max-w-[500px] m-auto space-y-3">
      {id ? (
        <Input label="id" readOnly text="Id" value={id} className="mb-5" />
      ) : (
        false
      )}
      <Input
        label="name"
        text="Name"
        value={name}
        valueChange={setName}
        className="mb-5"
      />
      <Input
        label="price"
        text="Preço"
        type="number"
        value={price}
        valueChange={setPrice}
      />
      <Input
        label="description"
        text="Descrição"
        value={description}
        valueChange={setDescription}
      />
      <Input
        label="purchasedIn"
        text="Comprado em"
        type="date"
        value={purchasedIn}
        valueChange={setPurchasedIn}
      />
      <Input
        label="responsable"
        text="Responsável"
        value={responsable}
        valueChange={setResponsable}
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => {
            saveItem(name, price, description, purchasedIn, responsable, id);
            router.push("/Dashboard");
          }}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button
          color="red"
          onClick={() => {
            router.push("/Dashboard");
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
