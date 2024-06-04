import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
  title: string;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
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
  )
}
