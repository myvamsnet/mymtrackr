import { blogs } from "@/constant/help";
import "./BlogPost.css";
import welcomeMtrackr from "@/assets/images/welcome-mtrackr.svg";
import Image from "next/image";
export const BlogPost = () => {
  return (
    <section className=" overflow-x-scroll  scrollbar-hide  gap-3  flex h-[154px] overflow-y-hidden">
      {blogs.map((blog, index) => (
        <div className={` w-[224.5px] `} key={index}>
          <div className="w-full ">
            <Image
              src={welcomeMtrackr}
              alt={blog.title}
              height={106}
              width={0}
              className="  object-cover h-[106px] w-full  rounded-md"
            />
          </div>
          <p className="text-xs leading-5 font-inter font-normal text-[#3E3E4C]  break-words py-3 w-[224.5px] flex">
            {`${
              blog.title.length > 70
                ? blog.title.slice(0, 70) + "..."
                : blog.title
            }`}
          </p>
        </div>
      ))}
    </section>
  );
};
