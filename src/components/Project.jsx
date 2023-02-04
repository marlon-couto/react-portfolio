import React from 'react';
import Image from 'next/legacy/image';

export default function Project({ image, description }) {
  return (
    <div className="basis-1/3 flex-1">
      <Image
        src={image}
        alt={description}
        className="rounded-lg object-cover"
        width="100%"
        height="100%"
        layout="responsive"
      />
    </div>
  );
}
