import Image from "next/image";
import { Fade } from "react-awesome-reveal";
export const ShowCaseImg = () => {
  return (
    <>
      <div className="hidden md:block">
        <Fade direction="up">
          <Image
            src={"/images/welcome-banner.svg"}
            alt="groups-phones"
            className="w-full h-[393px]"
            width={0}
            height={393}
          />
        </Fade>
      </div>
      <div className="block md:hidden h-full overflow-hidden">
        <Fade direction="up">
          <Image
            src={"/images/welcome-banner-mobile.svg"}
            alt="mobileimg"
            className="w-[614px] overflow-hidden "
            width={614}
            height={0}
          />
        </Fade>
      </div>
    </>
  );
};
