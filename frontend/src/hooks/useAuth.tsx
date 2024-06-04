import AuthContext from "@/Contexts/AuthProvider";
import {useContext} from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
