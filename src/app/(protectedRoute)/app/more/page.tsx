import React from 'react';
import { MoreHeader } from './__components/MoreHeader';
import { MoreLists } from './__components/MoreLists';
import ProtectedLayout from '../_components/layout/ProtectedLayout';
import { getUser, UserProfile } from '@/app/actions/getUser';
import {
  getSubscription,
  SubscriptionType,
} from '@/app/actions/getSubscription';

const More = async () => {
  const user = await getUser();
  const subscription = await getSubscription();
  return (
    <ProtectedLayout>
      <MoreHeader
        data={user?.data as UserProfile}
        subscription={subscription?.data as SubscriptionType}
      />
      <MoreLists data={user?.data as UserProfile} />
    </ProtectedLayout>
  );
};

export default More;
