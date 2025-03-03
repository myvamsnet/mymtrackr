import Image from "next/image";

export const RecordsNotFound = ({ message = "Records" }: Props) => {
  return (
    <div className="bg-off-white flex text-center justify-center py-10">
      <div className="">
        <Image
          src={
            "https://res.cloudinary.com/djd1jusad/image/upload/v1726587383/emptyRecord_zfrhe6.svg"
          }
          alt="RecordsNotFound"
          height={171}
          width={247}
          layout="responsive"
        />
        <h4 className="font-semibold text-sm text-[#34343F] pt-2 h-auto w-auto capitalize">
          No {message} Yet!
        </h4>
        <p className="text-center font-normal text-sm text-dark-100 pt-1 ">
          Start adding {message} with the <br /> “Add New” button.
        </p>
      </div>
    </div>
  );
};
interface Props {
  message: string;
}
