export const sortArray = <T extends number | string | IObjectWithCreatedAt>(
  dataArray: T[] | undefined | null,
  type: 'updated_at' | 'created_at'
) => {
  if (type === 'updated_at') {
    if (dataArray === undefined || dataArray === null)
      return [] as unknown as T[];

    const sortedArray =
      dataArray &&
      dataArray?.sort((a, b) => {
        if (typeof a === 'object' && typeof b === 'object') {
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        } else {
          return 0;
        }
      });

    return sortedArray;
  }

  if (type === 'created_at') {
    if (dataArray === undefined || dataArray === null)
      return [] as unknown as T[];

    const sortedArray =
      dataArray &&
      dataArray?.sort((a, b) => {
        if (typeof a === 'object' && typeof b === 'object') {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        } else {
          return 0;
        }
      });

    return sortedArray;
  }
};

interface IObjectWithCreatedAt {
  created_at: string;
  updated_at: string;
}
