interface AmountProps {
  value: string;
}

export default function Amount(props: AmountProps) {
  return (
    <div className="flex justify-end text-white p-4 text-xl">
      <span>{props.value}</span>
    </div>
  );
}
