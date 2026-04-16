'use client';
import Card from '@/common/components/custom-card/component';
// import { defaultCard } from '@/assets/webp';
import { STATIC_TRENDING_GAMES } from '../../constants';

// const STATIC_TRENDING_GAMES = Array.from({ length: 6 }, (_, index) => ({
//   id: `landing-static-game-${index + 1}`,
//   name: `Top Game ${index + 1}`,
//   thumbnailUrl: defaultCard,
// }));

export default function GamesSection() {
  return (
    <section className="w-full px-[1rem] lg:px-[13.5rem] -mt-[80px]  sm:-mt-[10px]">
      <div className="w-full text-center">
        <p className="font-bold text-[1.2rem] md:text-[2rem] text-white hidden md:block">
          Exciting online Slots & Casino-style games{' '}
        </p>
        <p className="font-bold text-[1.2rem] md:text-[2rem] text-white md:hidden">
          Exciting Casino-style games{' '}
        </p>
        <p className="text-[0.9rem] md:text-[1.375rem] font-normal text-[#B3B3B3]">
          With over <span className="font-extrabold text-white">150+ games</span> to choose from,
          there is always something new to play.
        </p>
      </div>

      <div className="mt-[1rem] grid grid-cols-3 gap-[0.625rem] md:mt-[1.5rem] md:grid-cols-6 md:gap-[1rem]">
        {STATIC_TRENDING_GAMES.map((game) => (
          <div key={game.id} className="w-full">
            {
              <div className=" ">
                <Card
                  categoryId={game?.categoryId}
                  iconUrl={game?.thumbnailUrl}
                  id={game?.id}
                  name={game?.name}
                  aspectRatio="200/260"
                  height={310}
                  width={220}
                  showFavorite={false}
                  className={
                    'border border-[#3447FE] shadow-[inset_0px_0px_8px_0px_#FFFFFF40] rounded-[1.25rem]'
                  }
                />
              </div>
            }
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-[1rem] md:mt-[1.5rem]">
        <button className="text-[0.9rem] md:text-[1.1rem] btn-global group bg-sidebarGetCoinsBg text-white font-semibold  rounded-[0.5rem] px-[0.825rem] md:px-[3rem] py-[0.5rem] md:py-[0.625rem] max-w-[200px]">
          <span>View all games</span>
        </button>
      </div> */}
    </section>
  );
}
