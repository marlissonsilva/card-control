import Home from "@/pages/Dashboard";

interface MenuItensProps {
  text: string;
  icon: any;
  className?: string;
  onClick?: () => void;
}

export default function MenuItens(props: MenuItensProps) {
  return (
    <li
      className={`bg-purple-800 p-2 px-4 rounded-md text-lg font-semibold cursor-pointer flex items-center gap-2
      ${props.className ?? props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </li>
  );
}
