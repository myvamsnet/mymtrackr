import React from 'react';
import { Header } from './__components/Header';
import Balance from './__components/Balance';
import { RecentRecords } from './__components/RecentRecords';
import ProtectedLayout from '../_components/layout/ProtectedLayout';
import { getUserProfile } from '@/app/actions/getUserProfile';
import { getAllRecords } from '@/app/actions/AllRecords';
import { RecordData, Records } from '@/types/records';
import { getUser } from '@/app/actions/getUser';
import { UserResponse } from '@/types/auth';

const Home = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  const records = await getAllRecords();
  return (
    <ProtectedLayout>
      <Header user={user?.data} />
      <Balance
        user={user?.data}
        data={records?.data as unknown as RecordData}
      />
      <RecentRecords
        data={records?.data as unknown as RecordData}
        error={!records?.success ? records?.message ?? '' : ''}
      />
    </ProtectedLayout>
  );
};

export default Home;
