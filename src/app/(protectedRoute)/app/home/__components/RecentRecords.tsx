'use client';
import { Records } from '@/types/records';
import Link from 'next/link';
import { RecordsNotFound } from '../../_components/common/records/RecordsNotFound';
import { RecordItem } from '../../_components/common/records/RecordItem';
import toast from 'react-hot-toast';

export const RecentRecords = ({
  data,
  error,
}: {
  data: Records[];
  error: string;
}) => {
  if (error) {
    return toast.error(error);
  }
  const records = data;
  return (
    <div>
      <section className="mt-4 md:p-6 p-4 flex justify-between  bg-off-white-300 border-b-2 rounded-tl-md rounded-tr-md border-[#F4F5F7] sticky top-[60px] z-30">
        <h4 className="md:text-base text-xs font-medium text-dark">
          Recent History
        </h4>
        <Link
          href={'/app/history'}
          className="md:text-base text-xs font-medium text-primary"
        >
          See All
        </Link>
      </section>

      <section className=" bg-off-white-300 overflow-y-auto overflow-x-hidden ">
        {records && records?.length === 0 && <RecordsNotFound />}
        {records &&
          records?.length > 0 &&
          records?.map((record, index) => (
            <RecordItem
              key={`${record?.id}-${index}`}
              record={record}
            />
          ))}
      </section>
    </div>
  );
};
