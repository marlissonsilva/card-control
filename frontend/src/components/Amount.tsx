interface AmountProps {
  value: string;
  width: number | undefined;
  className: string;
}

export default function Amount(props: AmountProps) {
  return (
    <div
      className={`flex justify-between text-white py-4 text-xl ${
        props.className ?? props.className
      }`}
    >
      <p>
        Você possui <span className="font-semibold">{props.width}</span> compras
        cadastradas
      </p>
      <p>
        Total: <span className="text-2xl font-medium">{props.value}</span>
      </p>
    </div>
  );
}
