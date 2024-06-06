import Image from "next/image";

interface OverviewProps {}

export default function Overview(props: OverviewProps) {
  return (
    <section className="wrapper h-full pt-4 text-white">
      <video controls src="/overview.webm"></video>
      <div className="text-xl space-y-4">
        <h1 className="text-center text-6xl py-6">
          Controle de cartão de crédito
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
          iste? Inventore amet aliquid natus at repellat. Ducimus tempora fugiat
          numquam quis molestias saepe atque neque placeat ex officia sapiente,
          consequuntur illum tempore laboriosam libero magnam! Perferendis esse
          eum quibusdam, dicta ipsam at, natus blanditiis magnam voluptatibus
          recusandae repudiandae animi est optio modi expedita nemo culpa
          voluptatum veniam repellat? Voluptatem reiciendis possimus sapiente
          sit, laudantium accusamus eius neque atque quos? Eveniet adipisci
          veniam natus explicabo, placeat quisquam cum vitae illum inventore
          nobis soluta distinctio, similique temporibus. Facere possimus
          consectetur deleniti dolorem, suscipit reiciendis nostrum! Dolore ab
          consectetur enim doloribus, laudantium et.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
          iste? Inventore amet aliquid natus at repellat. Ducimus tempora fugiat
          numquam quis molestias saepe atque neque placeat ex officia sapiente,
          consequuntur illum tempore laboriosam libero magnam! Perferendis esse
          eum quibusdam, dicta ipsam at, natus blanditiis magnam voluptatibus
          recusandae repudiandae animi est optio modi expedita nemo culpa
          voluptatum veniam repellat? Voluptatem reiciendis possimus sapiente
          sit, laudantium accusamus eius neque atque quos? Eveniet adipisci
          veniam natus explicabo, placeat quisquam cum vitae illum inventore
          nobis soluta distinctio, similique temporibus. Facere possimus
          consectetur deleniti dolorem, suscipit reiciendis nostrum! Dolore ab
          consectetur enim doloribus, laudantium et.
        </p>
      </div>
    </section>
  );
}
