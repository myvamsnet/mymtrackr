import { getRecordsById } from "@/app/actions/getRecordsById";
import { CustomHeader } from "@/components/CustomHeader";
import React, { Suspense } from "react";
import { Details } from "./components/Details";
import { Records } from "@/types/records";

import { notFound } from "next/navigation";
import { DeleteAndEditRecord } from "./components/DeleteAndEditRecord";
import CustomLoader from "@/components/CustomLoader/page";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { data, error } = await getRecordsById(params?.id);
  if (error) {
    return notFound();
  }
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen py-2">
      <CustomHeader title="Record Details" />
      <Suspense fallback={<CustomLoader />}>
        {error && <p>{error}</p>}
        {data && <Details records={data as Records} />}
        {data && <DeleteAndEditRecord data={data as Records} />}
      </Suspense>
    </main>
  );
};

export default page;
