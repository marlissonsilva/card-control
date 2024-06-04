interface InputProps {
  type?: "email" | "password" | "number" | "date";
  text: string;
  value: any;
  name?: string;
  readOnly?: boolean;
  className?: string;
  label: string;

  valueChange?: (valor: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2 text-white" htmlFor={props.label}>
        {props.text}
      </label>
      <input
        id={props.label}
        type={props.type ?? "text"}
        value={props.value}
        name={props.name}
        readOnly={props.readOnly}
        onChange={(e) => props.valueChange?.(e.target.value)}
        className={`
                    border border-purple-800 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? "" : "focus:bg-white"}
                `}
      />
    </div>
  );
}
