import {GetServerSideProps} from "next";
import Form from "@/components/Form";
import Layout from "@/components/Layout";

interface EditProps {
  id: string;
}

export default function Edit({id}: EditProps) {
  return (
    <Layout
      title="Editar"
      className="flex flex-col justify-center items-center sm:h-[95vh]"
    >
      <Form id={id} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params} = context;
  const id = params?.id || null;

  return {
    props: {
      id,
    },
  };
};
