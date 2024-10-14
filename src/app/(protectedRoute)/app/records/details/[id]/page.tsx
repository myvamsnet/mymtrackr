import { getRecordsById } from '@/app/actions/getRecordsById';
import { CustomHeader } from '@/components/CustomHeader';
import React from 'react';
import { Details } from './components/Details';
import { Records } from '@/types/records';

import { notFound } from 'next/navigation';
import { DeleteAndEditRecord } from './components/DeleteAndEditRecord';

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { data, error } = await getRecordsById(params?.id);
  console.log(data);
  if (error) {
    return notFound();
  }
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen py-2">
      <CustomHeader title="Record Details" />
      {error && <p>{error}</p>}
      {data && <Details records={data as Records} />}
      {data && <DeleteAndEditRecord data={data as Records} />}
    </main>
  );
};

export default page;
