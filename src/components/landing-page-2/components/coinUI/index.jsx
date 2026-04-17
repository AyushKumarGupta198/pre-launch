import { gcCoin,scCoin } from "@/assets/svg";
import Image from "next/image";
export default function Coins({isDialog = false}) {
    return(
        <div className={`bg-transparent border border-[#F8C935] border-dashed rounded-md inline-flex align-middle mx-1 flex-col items-start justify-center px-4 py-2 relative gap-1 ${isDialog && '!px-1.5 !py-1.5 !w-fit inline-block  align-middle '}`}>
            <div className={`flex items-center gap-2 ${isDialog && '!gap-1'}`}>
                <Image src={gcCoin} alt="GC Coin" width={30} height={30} className={`w-[1.8rem] sm:w-[2.3rem] h-[1.8rem] sm:h-[2.3rem]  ${isDialog && '!w-[20px] !h-[20px]'}`}/>
                <p className={`text-[#FFCC00] font-normal text-[1rem] sm:text-[1.3rem] ${isDialog && '!text-[0.825rem]'}`}><span className={`font-[900] text-[1.2rem] sm:text-[1.5rem] ${isDialog && '!text-[0.9rem]'}`}>150K </span> Gold Coins</p>
            </div>
            <span className={`absolute top-1/3 left-1/2 text-[1.2rem] sm:text-[1.5rem] text-white ${isDialog && '!text-[0.9rem]'}`}>+</span>
            <div className={`flex items-center gap-2 ${isDialog && '!gap-1'}`}>
                <Image src={scCoin} alt="SC Coin" width={30} height={30} className={`w-[1.8rem] sm:w-[2.3rem] h-[1.8rem] sm:h-[2.3rem] ${isDialog && '!w-[20px] !h-[20px]'}`}/>
                <p className={`text-[#1CFF3E] font-normal text-[1rem] sm:text-[1.3rem] ${isDialog && '!text-[0.825rem]'}`}><span className={`font-[900] text-[1.2rem] sm:text-[1.5rem] ${isDialog && '!text-[0.9rem]'}`}>30 </span> Sweep Coins</p>
            </div>

        </div>
    )
}