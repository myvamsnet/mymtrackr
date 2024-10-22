import React from 'react';
import { Header } from './__components/Header';
import Balance from './__components/Balance';
import { RecentRecords } from './__components/RecentRecords';
import ProtectedLayout from '../_components/layout/ProtectedLayout';
import { getAllRecords } from '@/app/actions/AllRecords';
import { getUser } from '@/app/actions/getUser';
import { UserResponse } from '@/types/auth';
import { Records } from '@/types/records';

const Home = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  const records = await getAllRecords();
  return (
    <ProtectedLayout>
      <Header user={user?.data} />
      <Balance
        user={user?.data}
        data={records?.data as unknown as Records[]}
      />
      <RecentRecords
        data={records?.data as unknown as Records[]}
        error={!records?.success ? records?.message ?? '' : ''}
      />
    </ProtectedLayout>
  );
};

export default Home;
