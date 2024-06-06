interface ButtonProps {
  color?:
    | "green"
    | "blue"
    | "gray"
    | "red"
    | "yellow"
    | "slate"
    | "purple"
    | "cyan";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`
            cursor-pointer
            bg-gradient-to-r from-${color ?? color}-500 to-${color ?? color}-800
            text-white px-4 py-2 rounded-md w-full 
            ${props.className ?? props.className}
        `}
    >
      {props.children}
    </button>
  );
}
