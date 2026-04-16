'use client';

const DEFAULT_ITEMS = Array(6).fill('START WINNING TODAY');

export default function WinningStrip({ items = DEFAULT_ITEMS, isBannerStrip = false }) {
  const stripItems = items.length ? items : DEFAULT_ITEMS;

  const renderItems = (suffix) =>
    stripItems.map((item, index) => (
      <span
        key={`${suffix}-${item}-${index}`}
        className={`inline-flex items-center shrink-0 ${isBannerStrip ? 'font-normal text-[12px] italic leading-[100%] tracking-[0%]' : 'uppercase'} font-inter text-[1rem] md:text-[2.25rem] font-bold leading-[100%] tracking-[-0.07em] text-[#FFFFFFDB] whitespace-nowrap text-right`}
      >
        {item}
        {!isBannerStrip && (
          <span className="mx-[0.6rem] md:mx-[1.75rem] text-white/90 text-[1.2rem] md:text-[1.75rem]">
            •
          </span>
        )}
      </span>
    ));

  return (
    <section
      className={`relative w-full overflow-hidden ${isBannerStrip && '!py-[0.4rem]'} py-[0.9rem] md:py-[1.2rem]`}
      style={{
        background: isBannerStrip
          ? 'linear-gradient(90deg, rgba(34, 25, 102, 0.7) 0%, rgba(68, 50, 204, 0.7) 100%)'
          : 'linear-gradient(136.23deg, rgba(29, 13, 121, 0.7) 12.99%, rgba(82, 29, 235, 0.7) 75.53%)',
      }}
    >
      <div
        className="flex w-max animate-winning-strip-scroll"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div className="flex items-center shrink-0 pr-[1rem] md:pr-[1.75rem]">
          {renderItems('first')}
        </div>
        <div className="flex items-center shrink-0 pr-[1rem] md:pr-[1.75rem]">
          {renderItems('second')}
        </div>
      </div>
    </section>
  );
}
