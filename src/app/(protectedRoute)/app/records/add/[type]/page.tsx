import { CustomHeader } from '@/components/CustomHeader';
import { InputType, typeListInput } from '@/constant/createRecords';
import { ParamsProps } from '@/types/records';
import React from 'react';
import { AddRecordForm } from './components/AddRecordForm';

const AddRecord = ({ params }: ParamsProps) => {
  const inputLists = typeListInput(params.type) as InputType[];
  return (
    <main className="container mx-auto  md:max-w-[700px] font-inter lg:p-0 px-3 gap-4   my-3">
      <CustomHeader title={params.type} />
      <AddRecordForm
        title={params.type}
        inputlists={inputLists}
        recordType={params.type}
      />
    </main>
  );
};

export default AddRecord;
