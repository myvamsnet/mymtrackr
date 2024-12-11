import { getInvoicesAndReceiptsById } from "@/app/actions/getInvoicesAndReceiptsById";
import { Details } from "./_component/Details";
import { Layout } from "./_component/Layout";
import { notFound } from "next/navigation";

const InvoicesandreceiptsDetails = async ({ params }: PageProps) => {
  const { data, error } = await getInvoicesAndReceiptsById(params?.id);
  if (error) {
    return notFound();
  }
  return <Layout>{data && <Details data={data} />}</Layout>;
};

export default InvoicesandreceiptsDetails;
interface PageProps {
  params: {
    id: string;
  };
}
