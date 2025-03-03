import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRecordStore from "@/zustand/recordStore";

export function SelectWorth() {
  const setBalaceType = useRecordStore((state) => state.setBalanceType);
  const balanceType = useRecordStore((state) => state.balanceType);
  return (
    <section>
      <Select
        onValueChange={(value) => {
          setBalaceType(value as "gross" | "net");
        }}
        value={balanceType as "gross" | "net"}
      >
        <SelectTrigger className="w-full bg-white/15 text-[#FCFCFC] font-medium text-sm outline-none focus:outline-none  border-none h-[22px]">
          <SelectValue placeholder="Select Worth" />
        </SelectTrigger>
        <SelectContent className=" text-dark">
          <SelectGroup className=" cursor-pointer ">
            <SelectLabel></SelectLabel>
            <SelectItem value="gross">Avaliable Balance</SelectItem>
            <SelectItem value="net">Final Balance</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}
