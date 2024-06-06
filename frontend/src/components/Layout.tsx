import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: any;
  title: string;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Sistema de gestão de cartão de crédito, voltado para cartões que várias pessoas usam."
        />
        <meta
          name="keywords"
          content="gestão, cartão de crédito, fatura, controle, card"
        />
        <meta name="author" content="Marlisson Silva" />
        <title>Card Control</title>
      </Head>
      <main className="h-auto  bg-zinc-800">
        <Header />
        <section
          className={`wrapper pt-28 px-2 ${props.className ?? props.className}`}
        >
          <div>
            <Title>{props.title}</Title>
          </div>
          <div>{props.children}</div>
        </section>
        <Footer />
      </main>
    </>
  );
}
