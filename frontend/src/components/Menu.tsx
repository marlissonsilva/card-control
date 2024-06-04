import useBoolean from "@/hooks/useBoolean";
import useWidthWindow from "@/hooks/useWidthWindow";
import {
  IconLogin,
  IconLogout,
  IconMenu2,
  IconPlus,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Request from "@/core/Request";
import {useEffect, useState} from "react";
import MenuItens from "./MenuItem";
import {useRouter} from "next/router";
import useAuth from "@/hooks/useAuth";

interface MenuProps {}

export default function Menu(props: MenuProps) {
  const router = useRouter();
  const width = useWidthWindow();
  const [open, toggleOpen, activeTrue, activeFalse] = useBoolean(false);
  const [mobile, setMobile] = useState(false);
  const {logged, setLogged} = useAuth();

  useEffect(() => {
    if (width === "xs" || width === "sm") {
      setMobile(true);
    } else {
      setMobile(false);
      activeFalse();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  function logout() {
    Request.deleteToken();
    setLogged(false);
    router.push("/");
  }

  function add() {
    router.push("/New");
  }

  return (
    <ul>
      <menu
        className={`${mobile ?? mobile} ${
          open ? "absolute top-20 p-4 right-1 bg-zinc-900" : "hidden"
        } 
         md:flex gap-6`}
      >
        <MenuItens
          text="Adicionar"
          icon={<IconPlus />}
          onClick={add}
          className={logged ? "flex" : "hidden"}
        />
        <MenuItens
          text="Conta"
          icon={<IconUser />}
          onClick={() => console.log()}
          className={logged ? "flex" : "hidden"}
        />
        <MenuItens
          text="Logout"
          icon={<IconLogout />}
          onClick={logout}
          className={logged ? "flex" : "hidden"}
        />
        <MenuItens
          text="Login"
          icon={<IconLogin />}
          onClick={() => router.push("/Auth")}
          className={logged ? "hidden" : "flex"}
        />
      </menu>

      <button className={`flex items-center md:hidden`} onClick={toggleOpen}>
        {open ? <IconX size={40} /> : <IconMenu2 size={40} />}
      </button>
    </ul>
  );
}
