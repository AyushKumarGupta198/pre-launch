import React from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import Image from 'next/image';
import { crossIcon, name } from '@/assets/svg';

const CommonDialog = ({ isOpen, onClose, children, contentClassName = '' }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-promoDialogBg p-0 min-h-[18.0625rem] w-[calc(100vw-20px)]  sm:w-fit  border-none">
        <DialogHeader className="bg-headerBg flex flex-row justify-between items-center h-[4.75rem] w-full rounded-t-lg m-0">
          <div className="flex justify-between items-center w-full p-4">
            <Image
              src={name}
              width={160}
              height={30}
              alt="logo"
              className="block w-auto h-[3.375rem]"
            />
            <Image
              src={crossIcon}
              alt="close icon"
              onClick={onClose}
              className="hover:scale-125 rounded-full cursor-pointer ml-2"
              height={24}
              width={24}
            />
          </div>
        </DialogHeader>

        <div className={'flex flex-col p-5 gap-[1rem] md:gap-[1.5rem] ' + contentClassName}>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
