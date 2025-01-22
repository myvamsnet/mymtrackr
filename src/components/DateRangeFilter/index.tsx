import { addDays, subDays } from "date-fns";
import { enUS, ja } from "date-fns/locale";
import { useCookies } from "react-cookie";
import { DateRangePicker } from "react-date-range";

export interface IDateRangeFilterProps {
  onChange: (selection?: any) => void;
  startDate: Date;
  endDate: Date;
  isMobile: boolean;
}
const DateRangeFilter = ({
  onChange,
  startDate,
  endDate,
  isMobile,
}: IDateRangeFilterProps) => {
  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    onChange(selection);
  };
  return (
    <DateRangePicker
      onChange={handleOnChange}
      showMonthAndYearPickers={true}
      months={1}
      rangeColors={["#246BFD"]}
      ranges={[
        {
          startDate: startDate || subDays(new Date(), 7),
          endDate: endDate || addDays(new Date(), 1),
          key: "selection",
        },
      ]}
      staticRanges={[]}
      inputRanges={[]}
      direction={isMobile ? "vertical" : "horizontal"}
      className="!w-full flex justify-center items-center flex-col"
    />
  );
};

export default DateRangeFilter;
