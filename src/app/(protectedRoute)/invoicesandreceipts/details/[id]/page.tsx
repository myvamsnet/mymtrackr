import { getInvoicesAndReceiptsById } from "@/app/actions/getInvoicesAndReceiptsById";
import { Details } from "./_component/Details";
import { notFound } from "next/navigation";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";

const InvoicesandreceiptsDetails = async ({ params }: PageProps) => {
  return (
    <PageLayout>
      {" "}
      <Details />
    </PageLayout>
  );
};

export default InvoicesandreceiptsDetails;
interface PageProps {
  params: {
    id: string;
  };
}
