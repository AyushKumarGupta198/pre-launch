'use client';

import Image from 'next/image';
import { defaultCard } from '@/assets/webp';

const Card = ({ iconUrl, name, className = '', height = 310, width = 220 }) => {
  return (
    <div className={'relative group cursor-pointer game-card ' + className}>
      <div className="relative w-full overflow-hidden !rounded-[20px] aspect-[200/260]">
        <Image
          src={iconUrl || defaultCard}
          alt={name || 'Game'}
          width={width}
          height={height}
          className="w-full h-full rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default Card;
