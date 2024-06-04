import {Inter} from "next/font/google";
import Layout from "@/components/Layout";
import Overview from "./Overview";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <Layout title="Seja bem vindo!">
      <Overview />
    </Layout>
  );
}
