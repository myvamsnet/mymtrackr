import { Delete } from "@/assets/icons/Delete";
import { ConfirmAction } from "@/components/ConfirmAction";

export const DeleteTaskModal = ({
  deleteLoader,
  handleDelete,
  isOpen,
  toogle,
}: Props) => {
  return (
    <ConfirmAction
      isOpen={isOpen}
      toggle={toogle}
      buttonText={
        <button
          className="size-4 bg-[#F4F8FF] rounded-full flex justify-center items-center"
          role="button"
          disabled={deleteLoader}
        >
          <Delete color="#C25353" />
        </button>
      }
      title={`Confirm Delete  Task`}
      subTitle=" Are you sure you want to delete this Task? This action cannot be  undone."
      btnClassName="bg-red-500 hover:bg-red-400 text-white outline-none"
      subTitleClassName="text-red-500 text-xs my-3"
      handleAction={handleDelete}
      isPending={deleteLoader}
    />
  );
};
interface Props {
  deleteLoader: boolean;
  handleDelete: () => void;
  isOpen: boolean;
  toogle: (open: boolean) => void;
}
