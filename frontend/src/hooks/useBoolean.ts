// existe a convenção de sempre começar com "use"
// São funções que podem sert importadas em qualquer parte do código

import {useState} from "react";

export default function useBoolean(valor: boolean) {
  const [active, setActive] = useState(valor ?? false);

  function toggleactive() {
    setActive(!active);
  }

  function activeTrue() {
    setActive(true);
  }

  function activeFalse() {
    setActive(false);
  }
  const r: [boolean, () => void, () => void, () => void] = [
    active,
    toggleactive,
    activeTrue,
    activeFalse,
  ];

  return r;
}
