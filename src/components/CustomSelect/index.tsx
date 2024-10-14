import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const CustomSelect = ({
  dateFilter,
  onChangeDate,
  options,
  name,
}: CustomSelectProps) => {
  return (
    <Select
      onValueChange={(e) => {
        onChangeDate(e, name as string);
      }}
      value={dateFilter}
    >
      <SelectTrigger className="w-full bg-off-white-300   py-3 px-4">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, i) => (
          <SelectItem
            key={i}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
interface CustomSelectProps {
  dateFilter: string;
  onChangeDate: (e: string, type: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  name?: string;
}
