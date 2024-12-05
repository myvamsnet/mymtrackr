'use client';

import { CustomSearch } from '@/components/Search';
import { selectByDate } from '@/constant/selectOptions';
import { useDateFilter } from '@/hooks/useDateFilter';
import { useForm } from 'react-hook-form';
import { SearchableSelect } from '@/components/SearchableSelect';
import { useEffect } from 'react';
export const Filters = () => {
  const { onChangeDate } = useDateFilter();
  const { control, watch, setValue } = useForm({
    defaultValues: {
      filterDate: 'today',
    },
  });
  const watchFramework = watch('filterDate');
  useEffect(() => {
    if (watchFramework) {
      onChangeDate(watchFramework);
    }
    if (!watchFramework) {
      setValue('filterDate', 'today');
    }
  }, [watchFramework, onChangeDate, setValue]);
  return (
    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
      <CustomSearch />
      <SearchableSelect
        name="filterDate"
        control={control}
        options={selectByDate}
      />
    </div>
  );
};
