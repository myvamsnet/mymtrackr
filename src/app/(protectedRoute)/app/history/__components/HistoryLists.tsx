'use client';
import { RecordItem } from '@/app/(protectedRoute)/app/_components/common/records/RecordItem';
import { RecordsNotFound } from '@/app/(protectedRoute)/app/_components/common/records/RecordsNotFound';
import { LoadingRecords } from '@/components/LoadingRecords';
import { useGetRecordByType } from '@/hooks/useGetRecordByType';
import React, { useEffect } from 'react';
import useInfiniteItems from '../hook/useInfiniteItems';
import { useInView } from 'react-intersection-observer';
export const HistoryLists = () => {
  const {
    records,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteItems();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  return (
    <section className=" bg-off-white-300 overflow-y-auto overflow-x-hidden ">
      {status === 'error' && <p>{error?.name}</p>}
      {records && records?.length === 0 && <RecordsNotFound />}
      {status === 'pending' && <LoadingRecords />}
      {records &&
        records?.length > 0 &&
        status === 'success' &&
        records?.map((record, index) => (
          <RecordItem
            key={`${record?.id}-${index}`}
            record={record}
          />
        ))}

      {status === 'success' && records?.length > 0 && (
        <div
          ref={ref}
          className="py-6 flex justify-center items-center text-primary font-medium"
        >
          {isFetchingNextPage ? 'Loading more...' : ''}
        </div>
      )}
    </section>
  );
};
