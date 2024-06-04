import Button from "@/components/Button";
import {createContext, useState, useContext} from "react";
import Request from "@/core/Request";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";

export default function Auth() {
  const router = useRouter();
  const [action, setAction] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setLogged} = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {email, password};

    try {
      const response = await Request.post("/user/login", dataToCheck);
      if (!response.status) {
        Request.addToken(response);
        setLogged(true);
        router.push("/Dashboard");
        return;
      }
      window.alert("Usuário ou senha incorretos");
    } catch (error) {
      console.log(error);
      window.alert("Usuário ou senha incorretos");
    }
  };

  const handleCreateUser = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {email, password};

    try {
      const response = await Request.post("/user/create", dataToCheck);
      if (response) {
        console.log("Usuário cadastrado");
        setEmail("");
        setPassword("");
        setAction("login");
        return;
      }
      console.log("Lançar erro de criação de usuário");
    } catch (error) {
      console.log(error);
    }
  };

  function handleRequest(event: any) {
    if (action === "login") {
      handleLogin(event);
      return;
    }
    handleCreateUser(event);
  }

  function handleClickBtnLogin() {
    setAction("login");
    setEmail("");
    setPassword("");
  }

  function handleClickBtnCreate() {
    setAction("registar");
    setEmail("");
    setPassword("");
  }

  return (
    <Layout
      title={action === "login" ? "Fazer Login" : "Criar conta"}
      className="flex flex-col justify-center items-center  h-[95vh]"
    >
      <div
        className={`flex items-center justify-center  w-[95vw] max-w-[500px] p-8 rounded-md
     ${action === "login" ? "bg-zinc-700" : ""}`}
      >
        <div className="w-full ">
          <div className="flex gap-6 mb-6 justify-between">
            <Button color="green" onClick={handleClickBtnLogin}>
              Login
            </Button>
            <Button
              color="cyan"
              className="bg-cy"
              onClick={handleClickBtnCreate}
            >
              Registar
            </Button>
          </div>
          <form
            onSubmit={handleRequest}
            method="post"
            action="/"
            className="flex flex-col align-center"
          >
            <Input
              label="email"
              text="Email"
              type="email"
              value={email}
              valueChange={setEmail}
            />
            <Input
              label="password"
              text="Senha"
              type="password"
              value={password}
              valueChange={setPassword}
            />
            <Button
              color={action === "login" ? "green" : "cyan"}
              className="mt-4"
            >
              {action === "login" ? "Login" : "Criar"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
