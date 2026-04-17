'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  landingHero,
  landingBanner2,
  landingBanner3,
  landingButtom,
  landingButtomMobile,
  landingBanner2Mobile,
  landingBanner3Mobile,
} from '@/assets/webp';
import PromoSection from './promoSection';
import GamesSection from './gameSection';
import ForYouSection from './forYouSection';
import SupportSection from './supportSection';
import { useIsMobile } from '@/hooks/use-mobile';
import EmailSection from './emailSection';
import { landingInfo } from '@/assets/png';
import { usePreLaunchEvent } from '@/hooks/usePreLaunchEvent';
import CommonDialog from '@/common/components/common-dialog';
import { useSaveEmail } from '@/hooks/useSaveEmail';
import Coins from './coinUI';

// const STATIC_TRENDING_GAMES = Array.from({ length: 5 }, (_, index) => ({
//   id: `landing-static-game-${index + 1}`,
//   name: `Top Game ${index + 1}`,
//   thumbnailUrl: defaultCard,
//   maxBetGc: 0,
//   maxBetSc: 0,
//   minBetGc: 0,
//   minBetSc: 0,
//   maxMultiplier: 0,
//   maxVolatility: 0,
// }));

const LandingPage = () => {
  const isMobile = useIsMobile();
  const [isOpenHowItWorks, setIsOpenHowItWorks] = useState(false);

  usePreLaunchEvent();

  const { isOpen, setIsOpen, email, setEmail, loading, error, setError, handleReserve,reserved} = useSaveEmail();
  
    const renderContent = () => {
      return(
        <>
      {!reserved?<div className='bg-[#233269] text-white mx-auto text-center p-4 rounded-[1rem]'>
         <p className='font-bold text-[1.7rem]'>Reserve Your Spot</p>
         <p className='text-[1.4rem] font-normal'>Enter your email and we'll reserve your 
          {/* <Image src={landingCoins} alt="coin" width={120} height={100} className="inline-block h-[3em] align-middle mx-1"/>  */}
          <Coins isDialog={true}/>
          until launch night. See you at the tables.</p>
         <div className="flex flex-col md:flex-row mt-4 gap-2 items-center justify-center">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('');
              }}
              placeholder="Enter Your Email Address"
              className="w-[20rem] max-h-[3rem] rounded-[0.65rem] border-none  text-white text-[1.2rem] md:text-[1.5rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] placeholder:text-[1rem] placeholder:text-start text-start !pl-4"
            />
            <button className="btn-global group bg-sidebarGetCoinsBg h-[3rem] text-white font-bold px-[13px] sm:px-3 md:!px-4 py-[9.5px] md:py-2 rounded-[0.75rem] text-[1.3rem] !max-w-[200px]" onClick={handleReserve} disabled={loading}>
              <span>{loading ? "Reserving...":"Reserve My Spot"}</span>
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      :
      <div className="bg-[#233269] text-white mx-auto text-center w-full p-4 rounded-[1rem] flex flex-col items-center justify-center">
                  <p className="font-bold text-[1.5rem]">
                    Your Spot Is Reserved{" "}
                    <span className="text-green-600 text-[1.5rem]">✓</span>
                  </p>
      
                  <p className="text-[1.2rem] px-6">
                    We’ll send the invite to your email. Walk in with{" "}
                    {/* <Image
                      src={landingCoinMobile}
                      alt="coin"
                      width={120}
                      height={50}
                      // sizes="(max-width: 640px) 24px, 32px"
                      className="inline-block  align-middle mx-1"
                    />{" "} */}
      
                    <Coins isDialog={true} />
                    {" "}already in your wallet.
                  </p>
      
                  <button
                    className="btn-global group bg-sidebarGetCoinsBg px-6 py-2 rounded-[0.75rem] mt-3 !max-w-fit"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Got It</span>
                  </button>
                </div>
      }
      </>
      )
    };
  

  return (
    <>
      <main className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#071224] gap-[1.5rem] md:!gap-[4rem] pb-[6rem] md:pb-[3rem]">
        <div className="hidden fixed bottom-6 right-6  md:flex flex-col justify-center items-center scale-75 z-[1000]">
          <img src={landingInfo} alt="info" className="h-[4rem] w-[4rem]"/>
          <p
            className="text-white text-[1.5rem] underline cursor-pointer"
            onClick={() => setIsOpenHowItWorks(true)}
          >
            How it works
          </p>
        </div>
        {!isMobile && (
          <Image
            className="w-full h-auto z-0 cursor-pointer"
            height={1400}
            width={2000}
            alt="Hero"
            src={landingHero}
            onClick={()=>setIsOpen(true)}
          />
        )}
        <EmailSection />
        {!isMobile && <PromoSection />}
        <GamesSection />

        {/* <div className="w-full px-[1rem] lg:px-[13rem] hidden md:block">
          <LiveWinners isLandingPage={true} />
        </div> */}

        {/* <Image
          className="w-full h-auto z-0 cursor-pointer"
          height={1400}
          width={2000}
          alt="Banner2"
          src={isMobile ? landingBanner2Mobile : landingBanner2}
        /> */}
        <ForYouSection />

        <div className="w-full px-[1rem] md:px-[15rem] mt-[-1rem]">
          <Image
            className="w-full h-auto z-0 cursor-pointer"
            height={1400}
            width={2000}
            alt="Banner3"
            src={isMobile ? landingBanner3Mobile : landingBanner3}
          />
        </div>

        <div className="w-full bg-[linear-gradient(90deg,_#071224_3.23%,_#0E1237_50.76%,_#071224_100%)]">
          <SupportSection />
        </div>
        <div className="w-full px-[1rem] md:px-[15rem]">
          <Image
            className="w-full h-auto z-0 cursor-pointer"
            height={1400}
            width={2000}
            alt="Banner4"
            src={isMobile ? landingButtomMobile : landingButtom}
          />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-[100] flex items-center justify-center gap-[0.75rem] p-[0.75rem] bg-headerBg border-t border-[#FFFFFF1A] md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.25)]">
        <button className="min-w-[10rem] btn-animate-slide group bg-sidebarGetCoinsBg text-white font-bold py-[0.625rem] rounded-[0.5rem] text-[1rem] flex items-center justify-center gap-1" onClick={()=>setIsOpenHowItWorks(true)}>
          <span>How it works</span>
          <Image src={landingInfo} alt="info" width={20} height={20} />
        </button>
      </div>

      <CommonDialog
        isOpen={isOpenHowItWorks}
        onClose={() =>  setIsOpenHowItWorks(false)}
        contentClassName="w-full sm:w-[80vw] md:w-[60vw] max-w-[50rem] max-h-[60vh] overflow-y-auto p-2 md:p-4"
      >
        
          <div className="bg-[#233269] text-white w-full p-4 md:p-8 rounded-[1rem] text-left space-y-1 max-h-[80vh] overflow-y-auto">
            
            <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-center">
              How It Works
            </h2>

            <p className="text-[1rem] text-center text-[#FFFFFFCF]">
              Free to play, real to win — here's everything waiting for you at Yayz.
            </p>

            <div className="space-y-3 text-[1rem] md:text-[1.2rem] leading-relaxed pt-2">

              <p>
                🪙 <b>Two Currencies, One Platform</b><br />
                Play with Gold Coins — always free. Play with Sweeps Coins and redeem them for real prizes (1 SC = $1 USD).
              </p>

              <p>
                🎰 <b>Hundreds of Games & Growing</b><br />
                Over 500 slot-style games plus crash games. New titles every week.
              </p>

              <p>
                🎁 <b>Bonuses Made to Keep You Winning</b><br />
                Daily bonuses, welcome rewards, and exclusive offers on coin packages.
              </p>

              <p>
                👑 <b>VIP Tiers & Rewards</b><br />
                Progress through VIP levels to unlock better perks and bigger bonuses.
              </p>

              <p>
                🏆 <b>Missions</b><br />
                Complete missions to earn extra rewards every time you play.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => setIsOpenHowItWorks(false)}
                className="btn-global group bg-sidebarGetCoinsBg px-6 py-2 rounded-[0.75rem] !max-w-fit"
              >
                <span>Got It</span>
              </button>
            </div>
          </div>
      </CommonDialog>
      <CommonDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        contentClassName="w-full sm:w-[75vw] md:w-fit max-w-[40rem] "
      >
        {renderContent()}
      </CommonDialog>
    </>
  );
};

export default LandingPage;
