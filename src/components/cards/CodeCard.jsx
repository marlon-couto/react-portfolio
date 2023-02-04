import React from 'react';
import Image from 'next/legacy/image';
import code from '../../img/code.png';

const codeLanguages = ['React JS', 'JavaScript ES6', 'Python', 'C#'];

export default function CodeCard() {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
      <Image src={code} alt="Programação" width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Desenvolvendo soluções!</h3>
      <p className="py-2">Desenvolvimento de aplicações web, mobile e mais.</p>
      <h4 className="py-4 text-blue-600 dark:text-blue-400">
        Linguagens de programação que utilizo
      </h4>
      {codeLanguages.map((language) => (
        <p className="text-gray-800 dark:text-neutral-100 py-1" key={language}>
          {language}
        </p>
      ))}
    </div>
  );
}
