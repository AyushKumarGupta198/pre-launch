import Image from 'next/image';
import { SupportPromo } from '../../constants';
import { useState } from 'react';
import CommonDialog from '@/common/components/common-dialog';
import Coins from '../coinUI';
import { useSaveEmail } from '@/hooks/useSaveEmail';

export default function SupportSection() {
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
              className="w-[17rem] md:w-[20rem] max-h-[3rem] rounded-[0.65rem] border-none  text-white text-[1.2rem] md:text-[1.5rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] placeholder:text-[1rem] placeholder:text-start text-start !pl-4"
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
  const handleClick=(id)=>{
   if(id===1){
    window.open('https://yayz.zendesk.com/hc/en-us', '_blank');
   }
   if(id===2){
    setIsOpen(true);
   }
  }
  return (
    <>
    <section className="w-full px-[2rem] md:px-[16rem] lg:px-[29.5rem] py-[2rem]">
      <div className="flex flex-col items-center gap-[3rem] md:flex-row md:items-stretch md:justify-center md:gap-0">
        {SupportPromo.map((item, index) => (
          <div key={index} className="flex items-center md:contents w-[90%] sm:w-[70%] md:w-auto ">
            <div className="flex flex-1 flex-row items-center justify-between md:justify-around gap-[1rem]">
              <div className="flex flex-col items-start justify-center gap-[1rem]">
                <h2 className="text-[0.9rem] md:text-[1.5rem] font-bold text-white ">
                  {item.title}
                </h2>
                <button
                  className="text-[0.9rem] md:text-[1.1rem] btn-global group !w-fit bg-sidebarGetCoinsBg text-white font-semibold  rounded-[0.625rem] px-[0.825rem] md:px-[3rem] py-[0.5rem] md:py-[0.625rem]"
                  onClick={()=>handleClick(item?.id)}
                >
                  <span>{item.CTA}</span>
                </button>
              </div>
              <div>
                <Image src={item.image} alt={item.title} width={118} height={103} className="" />
              </div>
            </div>

            {index < SupportPromo.length - 1 && (
              <div
                className="hidden md:block md:mx-[3rem] md:h-[6.5rem] md:w-px md:shrink-0 bg-[#882BFC45] self-center"
                style={{ backdropFilter: 'blur(5px)' }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
    <CommonDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        contentClassName="w-full sm:w-[75vw] md:w-fit max-w-[40rem] "
      >
        {renderContent()}
      </CommonDialog>
      </>
  );
}
