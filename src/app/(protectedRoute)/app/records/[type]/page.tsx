import React from 'react';
import { RecordHeader } from '../../_components/common/records/RecordHeader';
import { Filters } from './components/Filters';
import { RecordTypeLists } from './components/RecordTypeLists';
import { ParamsProps } from '@/types/records';
import Link from 'next/link';
import { RecordsBalance } from '../../_components/common/records/RecordsBalance';

const RecordType = async ({ params }: ParamsProps) => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <div className=" h-[90vh] overflow-y-auto">
        <RecordHeader title={`${params.type} List`} />
        <section className="bg-[#FCFDFE] p-4 rounded-tl-lg rounded-tr-lg grid gap-3">
          <Filters />
          <RecordsBalance />
        </section>
        <RecordTypeLists />
      </div>
      <div>
        <Link
          href={`/records/add/${params.type}`}
          className="text-xs font-semibold text-off-white-300 font-inter absolute right-6 bottom-0 z-30  p-4 rounded-2xl gap-2 bg-primary w-[121px] block my-4 btn-drop-shadow"
        >
          + Record New
        </Link>
      </div>
    </main>
  );
};

export default RecordType;
