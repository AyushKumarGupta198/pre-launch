import { ForYou } from '../../constants';
import Image from 'next/image';

export default function ForYouSection() {
  const getCardStyle = (background) => {
    if (!background || !background.startsWith('background:')) {
      return undefined;
    }

    return {
      background: background.replace('background:', '').trim(),
    };
  };

  return (
    <section className="w-full px-[1rem] md:px-[2rem] lg:px-[13.5rem]">
      <div className="w-full text-center mb-[0.2rem] md:mb-[2rem]">
        <h2 className="font-inter text-white text-[1.2rem] md:text-[2.9rem] font-bold uppercase leading-[100%] tracking-[-0.05em]">
          What&apos;s in it for you?
        </h2>
      </div>

      <div className="flex gap-[1rem] overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-[1.5rem] md:overflow-visible md:pb-0">
        {ForYou.map((item,index) => (
          <article key={item.title} className="relative min-w-[18.5rem] snap-start md:min-w-0">
            <div className="relative h-[17rem] md:h-[32rem]">
              <div
                style={getCardStyle(item.bg)}
                className={`absolute inset-x-0 bottom-0 h-[63%] rounded-[0.8rem] md:rounded-[1.75rem] ${item.bg?.startsWith('background:') ? '' : item.bg}`}
              />

              <div className="absolute inset-x-0 top-[1rem] md:top-[1.75rem] flex justify-center pointer-events-none z-10">
                <div className="flex h-[9rem]  w-[10rem] items-end justify-center md:h-[18rem] md:w-[18rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={340}
                    height={340}
                    className={`h-full w-auto object-contain object-bottom ${index===0 && 'scale-150 mb-6 md:mr-8'}`}
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 flex min-h-[63%] items-end justify-center px-[1.5rem] pb-[2rem] text-center text-white md:px-[2rem] md:pb-[3rem]">
                <div className="mx-auto max-w-[20rem]">
                  <h3 className="font-inter text-[1rem] md:text-[1.875rem] font-extrabold leading-[1.05] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-[0.875rem] font-inter text-[0.8rem] md:text-[1.5rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#EBEBEB]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
