import React, { useState } from "react";
// import { Button, Modal } from 'components';
import dayjs from "dayjs";
import DateRangeFilter from ".";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/button";

export const DateFilter: React.FC<Props> = ({
  submitAction,
  show,
  toggleOut,
}) => {
  const [dateFilter, setdateFilter] = useState<{
    dateFrom: string;
    dateTo: string;
  }>();

  const onChangeDateRange = (ranges: {
    startDate: string;
    endDate: string;
  }) => {
    setdateFilter((prevState) => ({
      ...prevState,
      dateFrom: dayjs(ranges.startDate).format("YYYY-MM-DD"),
      dateTo: dayjs(ranges.endDate).format("YYYY-MM-DD"),
      searching: false,
    }));
  };
  const submitActionEvent = () => {
    if (dateFilter?.dateFrom && dateFilter?.dateTo) {
      submitAction(dateFilter?.dateFrom, dateFilter?.dateTo);
      setdateFilter({
        dateFrom: "",
        dateTo: "",
      });
    }
  };

  return (
    <section className=" relative z-[1000]">
      <Modal isOpen={show} onClose={toggleOut} title={"Filter"} className="">
        <div className=" py-6 text-center">
          <DateRangeFilter
            startDate={dayjs(dateFilter?.dateFrom).toDate()}
            endDate={dayjs(dateFilter?.dateTo).toDate()}
            onChange={onChangeDateRange}
            isMobile={true}
          />
        </div>

        <div className="flex items-center justify-center">
          <Button className=" w-full px-6 py-3" onClick={submitActionEvent}>
            Submit
          </Button>
        </div>
      </Modal>
    </section>
  );
};

interface Props {
  toggleOut: () => void;
  show: boolean;
  submitAction: (dateFrom: string, dateTo: string) => void;
}
