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
  const [cookies] = useCookies(["i18next"]);
  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    onChange(selection);
  };
  return (
    <DateRangePicker
      onChange={handleOnChange}
      showMonthAndYearPickers={true}
      locale={cookies.i18next === "en" ? enUS : ja}
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
    />
  );
};

export default DateRangeFilter;
