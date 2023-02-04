import React from 'react';
import Image from 'next/legacy/image';
import avatar from '../../img/avatar.png';

export default function Avatar() {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-90 md:w-90">
      <Image src={avatar} alt="Olá!" layout="fill" objectFit="cover" />
    </div>
  );
}
