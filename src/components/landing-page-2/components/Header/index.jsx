'use client';
import Image from 'next/image';
import React, { memo, useState } from 'react';
import { name } from '@/assets/svg';
import CommonDialog from '@/common/components/common-dialog';
import { landingCoins } from '@/assets/png';
import Coins from '../coinUI';
import { useSaveEmail } from '@/hooks/useSaveEmail';

const PreLandingHeader = () => {
   const { isOpen, setIsOpen, email, setEmail, loading, setLoading, error, setError, handleReserve,reserved} = useSaveEmail();

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
            <span>{loading ? "Reseving...":"Reserve My Spot"}</span>
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
      <header className="hidden md:flex items-center justify-between bg-headerBg  sticky top-0 h-[4.3125rem] md:h-[5.62500rem] w-full py-1 sm:py-2 md:py-4 z-[100]">
        <nav className=" flex justify-between items-center w-full px-3 md:px-16">
          <Image
            src={name}
            width={160}
            height={30}
            alt="logo"
            className=" w-auto h-[3.75rem] md:h-[4.875rem]"
          />
          <p className="bg-[linear-gradient(90deg,#F6AF77_0%,#FDF0E5_21.63%,#FFFFFF_37.98%,#F6AF77_66.83%)] bg-clip-text text-transparent text-[0.7rem] font-extrabold text-center md:hidden">
            Early birds get <span className="text-[#EEF835]">20 free Sweep Coins</span> on launch
            day.
          </p>
          <div className="flex items-center gap-4">
            <button
              className="btn-global group bg-sidebarGetCoinsBg text-white font-extrabold px-[13px] sm:px-3 md:px-6 py-[9.5px] md:py-3 rounded-[0.5rem] md:rounded-[0.3125rem] text-[0.85rem] md:text-[1.25rem] md:min-w-[12.5rem] md:min-h-[3rem] border-[0.9px] border-[#ffffff5b] !shadow-[-8px_9px_12.6px_0px_#736CFC69] !bg-clip-padding"
              onClick={() => setIsOpen(true)}
            >
              <span>Notify Me</span>
            </button>
          </div>
        </nav>
      </header>
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

export default memo(PreLandingHeader);
