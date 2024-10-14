'use client';
import { deleteRecord } from '@/app/actions/deleteRecord';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { useMutation } from '@tanstack/react-query';

export function ConfirmDeleteRecord({ id }: ConfirmDeleteRecordProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const res = await deleteRecord(id);
      console.log(res);
      return res;
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-400 text-white">
          Delete Record
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] lg:w-full">
        <DialogHeader>
          <DialogTitle>Confirm Record Deletion</DialogTitle>
          <DialogDescription className="text-red-500 text-xs my-3">
            Are you sure you want to delete this record? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 grid-cols-2">
          <DialogClose className="w-full">
            <Button
              variant="outline"
              className="bg-white border w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => mutate(id)}
            disabled={isPending ? true : false}
          >
            {isPending ? 'Deleting...' : 'Confirm'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
interface ConfirmDeleteRecordProps {
  id: string;
}
