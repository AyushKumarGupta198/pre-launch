import { LandingPromo } from '../../constants';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';

export default function PromoSection() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full px-[0.5rem] sm:px-[1rem] lg:px-[13.5rem]">
      <div className="grid grid-cols-3 gap-[0.2rem] md:gap-[2.1rem]">
        {LandingPromo.map((item, index) => (
          <div
            key={index}
            className="rounded-[1.25rem]  md:px-[1px] md:[background:linear-gradient(180deg,#4B41FE_0%,#7D1DFD_100%)]"
          >
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6  md:px-4  rounded-[1.25rem] md:h-[10rem] text-white  ${!isMobile && item.bg} text-center md:text-start`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-auto h-[4rem] md:h-[8rem]"
                />
              </div>
              <div className="flex-1 gap-[0.9rem] ">
                <h3 className="text-[14px] md:text-[1.5rem] font-extrabold text-white leading-5 md:leading-7">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-[1.125rem] font-normal text-[#EBEBEB] md:leading-6 pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
