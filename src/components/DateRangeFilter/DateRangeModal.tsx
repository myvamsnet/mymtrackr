import dayjs from "dayjs";
import { useState } from "react";
import Modal from "../ui/Modal";
import DateRangeFilter from ".";
import { Button } from "../ui/button";

// Reusable Date Range Filter Component
export const DateRangeModal = ({
  isOpen,
  onClose,
  initialDateFilter,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialDateFilter: { startDate: Date; endDate: Date };
  onSubmit: (dateFilter: { startDate: string; endDate: string }) => void;
}) => {
  const [dateFilter, setDateFilter] = useState(initialDateFilter);

  const onChangeDateRange = (ranges: { startDate: Date; endDate: Date }) => {
    setDateFilter(ranges);
  };

  const handleSubmit = () => {
    onSubmit({
      startDate: dayjs(dateFilter.startDate).format("YYYY-MM-DD"),
      endDate: dayjs(dateFilter.endDate).format("YYYY-MM-DD"),
    });
    setDateFilter(initialDateFilter);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="md:w-[30%] w-full p-3"
    >
      <DateRangeFilter
        startDate={dayjs(dateFilter.startDate).toDate()}
        endDate={dayjs(dateFilter.endDate).toDate()}
        onChange={onChangeDateRange}
        isMobile={true}
      />
      <div className="flex justify-center items-center py-3">
        <Button
          onClick={handleSubmit}
          className="py-2 px-4 w-[250px] h-10"
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};
