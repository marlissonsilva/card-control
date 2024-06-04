import {useState} from "react";

export default function useToggle(valor?: boolean) {
  const [active, setActive] = useState(valor ?? false);

  function toggleActive() {
    setActive(!active);
  }

  const r: [boolean, () => void] = [active, toggleActive];

  return r;
}