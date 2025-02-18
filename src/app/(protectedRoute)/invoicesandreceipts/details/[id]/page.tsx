import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { Details } from "./_component/Details";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { ParamsPropsId } from "@/types/params";
import {
  fetchInvoiceAndReceiptById,
  InvoicesandreceiptResponse,
} from "@/app/actions/fetchInvoiceAndReceiptById";
import { notFound } from "next/navigation";
import { BusinessData } from "@/types/business";

const InvoicesandreceiptsDetails = async ({ params }: ParamsPropsId) => {
  try {
    // Fetch business profile data
    const { data: businessData } =
      (await getUserBusiness()) as BusinessProfilePayload;
    // Fetch invoice and receipt details
    const { data: invoicesAndReceiptData } = (await fetchInvoiceAndReceiptById(
      params.id
    )) as InvoicesandreceiptResponse;

    // Check if the necessary data is available
    if (!invoicesAndReceiptData || !businessData) {
      return notFound();
    }

    return (
      <PageLayout>
        <Details
          invoicesandreceipt={invoicesAndReceiptData}
          businessInfo={businessData as BusinessData}
        />
      </PageLayout>
    );
  } catch (error) {
    // Handle unexpected errors gracefully
    console.error("Error fetching data:", error);
    return notFound();
  }
};

export default InvoicesandreceiptsDetails;
