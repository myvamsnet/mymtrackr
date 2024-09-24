export const sortArray = <T extends number | string | IObjectWithCreatedAt>(
  dataArray: T[] | undefined | null,
  type: 'updateat' | 'createdAt'
) => {
  if (type === 'updateat') {
    if (dataArray === undefined || dataArray === null)
      return [] as unknown as T[];

    const sortedArray =
      dataArray &&
      dataArray?.sort((a, b) => {
        if (typeof a === 'object' && typeof b === 'object') {
          return (
            new Date(b.updateat).getTime() - new Date(a.updateat).getTime()
          );
        } else {
          return 0;
        }
      });

    return sortedArray;
  }

  if (type === 'createdAt') {
    if (dataArray === undefined || dataArray === null)
      return [] as unknown as T[];

    const sortedArray =
      dataArray &&
      dataArray?.sort((a, b) => {
        if (typeof a === 'object' && typeof b === 'object') {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else {
          return 0;
        }
      });

    return sortedArray;
  }
};

interface IObjectWithCreatedAt {
  createdAt: string;
  updateat: string;
}
