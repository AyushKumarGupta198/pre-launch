import Image from 'next/image';
import React, { memo } from 'react';

const ImageHandler = ({
  src,
  alt = 'Image',
  width = 100,
  height = 100,
  className = '',
  objectFit = 'cover',
  objectPosition = 'center',
  ...rest
}) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      className={className}
      style={{ objectFit, objectPosition }}
      {...rest}
    />
  );
};

export default memo(ImageHandler);
