import React from 'react';
import Image from 'next/legacy/image';
import design from '../../img/design.png';

const designTechs = [
  'CSS 3',
  'Figma',
  'Bootstrap',
  'SASS',
  'Tailwind CSS',
  'Styled Components',
];

export default function DesignCard() {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
      <Image src={design} alt="Design" width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Designs Incríveis!</h3>
      <p className="py-2">Criando design elegantes e bonitos.</p>
      <h4 className="py-4 text-blue-600 dark:text-blue-400">
        Ferramentas de estilização que utilizo
      </h4>
      {designTechs.map((tech) => (
        <p className="text-gray-800 dark:text-neutral-100 py-1" key={tech}>
          {tech}
        </p>
      ))}
    </div>
  );
}
