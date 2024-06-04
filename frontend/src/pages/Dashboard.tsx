import Button from "@/components/Button";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Request from "@/core/Request";
import Link from "next/link";
import {useRouter} from "next/router";
export default function Dashboard() {
  const router = useRouter();

  return (
    <Layout title="Lista de compras" className="min-h-[95vh]">
      <Card />
    </Layout>
  );
}
