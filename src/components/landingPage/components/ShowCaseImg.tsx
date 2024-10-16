import Image from 'next/image';
export const ShowCaseImg = () => {
  return (
    <>
      <div className="hidden md:block">
        <Image
          src={'/images/welcome-banner.svg'}
          alt="groups-phones"
          className="w-full h-[393px]"
          width={0}
          height={393}
        />
      </div>
      <div className="block md:hidden h-full overflow-hidden">
        <Image
          src={'/images/mobileimg.png'}
          alt="mobileimg"
          className="w-[614px] overflow-hidden "
          width={614}
          height={0}
        />
      </div>
    </>
  );
};
