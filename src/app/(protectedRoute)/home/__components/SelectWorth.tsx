import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRecordStore, { BalanceType } from "@/zustand/recordStore";

export function SelectWorth() {
  const { setBalanceType, balanceType } = useRecordStore();

  return (
    <section>
      <Select
        onValueChange={(value) => {
          setBalanceType(value as BalanceType);
        }}
        value={balanceType as BalanceType}
      >
        <SelectTrigger className="w-full bg-white/15 text-[#FCFCFC] font-medium text-sm outline-none focus:outline-none  border-none h-[22px]">
          <SelectValue placeholder="Select Worth" />
        </SelectTrigger>
        <SelectContent className=" text-dark">
          <SelectGroup className=" cursor-pointer ">
            <SelectLabel></SelectLabel>
            <SelectItem value="avaliableBalance">Avaliable Balance</SelectItem>
            <SelectItem value="finalBalance">Final Balance</SelectItem>
            <SelectItem value="profit">Profit</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}
