import React from 'react';
import Project from './Project';

import web1 from '../img/web1.png';
import web2 from '../img/web2.png';
import web3 from '../img/web3.png';
import web4 from '../img/web4.png';
import web5 from '../img/web5.png';
import web6 from '../img/web6.png';

const images = [
  { src: web1, alt: 'Projeto 1' },
  { src: web2, alt: 'Projeto 2' },
  { src: web3, alt: 'Projeto 3' },
  { src: web4, alt: 'Projeto 4' },
  { src: web5, alt: 'Projeto 5' },
  { src: web6, alt: 'Projeto 6' },
];

export default function ProjectSection() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Projetos</h3>
        <p className="text-md py-2 leading-8 text-gray-80">
          Alguns dos projetos que desenvolvi na
          {' '}
          <span className="text-blue-500">Trybe</span>
          {' '}
          e em meus estudos
          pessoais.
        </p>
      </div>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {images.map(({ src, alt }) => (
          <Project key={src} image={src} description={alt} />
        ))}
      </div>
    </section>
  );
}
