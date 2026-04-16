"use client";

import { useState } from "react";
import { landingCoins,landingCoinMobile, landingInfo, preLandingHero } from "@/assets/png";
import { name } from "@/assets/svg";
import Image from "next/image";
import CommonDialog from "@/common/components/common-dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import Coins from "../coinUI";
import { useSaveEmail } from "@/hooks/useSaveEmail";

export default function EmailSection() {
  const { isOpen, setIsOpen, email, setEmail, loading, setLoading, error, setError, handleReserve ,reserved,setReserved} = useSaveEmail();
  const isMobile = useIsMobile();


  return (
    <>
      {/* DESKTOP */}
      <div className=" flex-col justify-center items-center w-full hidden md:flex -mt-[24px]">
        
        

        <p className="bg-gradient-to-r from-[#FFC93A] to-[#F5F1FF] bg-clip-text text-transparent font-bold text-[4.3rem] ">
          The House Has a Gift For You
        </p>

        <p className="text-white font-normal text-[2.5rem]">
          Walk in on launch night with{" "}
          
          <Coins/>
          {" "}in your wallet.
        </p>
        <div className="flex flex-row mt-6 gap-2">
          <div>
            <input
            type="email"
            value={email}
            onChange={(e) =>{
              setError('');
              setEmail(e.target.value)
            }}
            placeholder="Enter your Email address..."
            className="w-[500px] max-h-[66px] rounded-[0.65rem] border-none text-white text-[1.25rem] md:text-[1.5rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] placeholder:text-[1.5rem] !pl-4"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          

          <button
            onClick={handleReserve}
            disabled={loading}
            className="btn-global group bg-sidebarGetCoinsBg text-white font-bold px-[13px] sm:!px-3 md:!px-6 py-[9.5px] md:!py-3 rounded-[0.75rem] text-[1.8rem] h-[4rem]"
          >
            <span>{loading ? "Reserving..." : "Reserve My Spot"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="flex flex-col items-center justify-start gap-1 text-center md:hidden w-full h-[700px] bg-cover bg-center pt-2 min-h-screen"
        style={{ backgroundImage: `url(${preLandingHero})` }}
      >
        <Image src={name} alt="logo" width={80} height={80} />

        <div className="font-semibold text-white text-[1.9rem] mx-auto">
          <span>Early Birds Get</span>
          {/* <Image
            src={landingCoins}
            alt="coins"
            width={200}
            height={100}
            className="mx-auto"
          /> */}
          <div><Coins/></div>
          <span>On Launch Day </span>
        </div>

        <p className="font-medium text-[0.9rem] text-[#FFFFFFCF]">
          Ready to play? Enter your email to get started.
        </p>

        <div className="flex flex-col mt-2 gap-2 items-center justify-center">
          <div>
          <input
            type="email"
            value={email}
            onChange={(e) =>{
              setError('');
              setEmail(e.target.value)
            }}
            placeholder="Email address..."
            className="w-[300px] max-h-[44px] rounded-[0.65rem] border-none text-white text-[0.75rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] placeholder:text-[0.75rem] !pl-4"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <button
            onClick={handleReserve}
            disabled={loading}
            className="btn-global group bg-sidebarGetCoinsBg text-white font-bold px-[13px] py-[9.5px] rounded-[0.75rem] text-[1.2rem] h-[45px] max-w-[80%] mt-2"
          >
            <span>{loading ? "Reserving..." : "Reserve My Spot"}</span>
          </button>
        </div>
      </div>

      {/* COMMON DIALOG */}
      <CommonDialog
        isOpen={reserved}
        onClose={() => setReserved(!reserved)}
        contentClassName={`w-full   max-w-[50rem] max-h-[50vh] md:!max-w-[550px] overflow-y-auto p-3`}
      >
        {/* SUCCESS */}
        
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
              already in your wallet.
            </p>

            <button
              className="btn-global group bg-sidebarGetCoinsBg px-6 py-2 rounded-[0.75rem] mt-3 !max-w-fit"
              onClick={() => setReserved(!reserved)}
            >
              <span>Got It</span>
            </button>
          </div>
        
      </CommonDialog>
    </>
  );
}