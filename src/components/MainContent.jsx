import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import Image from 'next/legacy/image';

import image3d from '../../public/dev-ed-wave.png';

import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';

import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';

export default function MainContent({ darkMode, setDarkMode }) {
  return (
    <main className="bg-white text-gray-900 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">marlon-couto-dev</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resumo
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Marlon Couto
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Desenvolvedor Web.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            Sou estudante de desenvolvimento web na Trybe. Atualmente estou no
            módulo de Frontend!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={image3d} alt="Olá!" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
            <Image src={design} alt="Design" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Designs Incríveis!
            </h3>
            <p className="py-2">Criando design elegantes e bonitos.</p>

            <h4 className="py-4 text-teal-600">
              Ferramentas de estilização que utilizo
            </h4>
            <p className="text-gray-800 py-1">CSS 3</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Bootstrap</p>
            <p className="text-gray-800 py-1">SASS</p>
            <p className="text-gray-800 py-1">TailWind</p>
            <p className="text-gray-800 py-1">PostCSS</p>
            <p className="text-gray-800 py-1">Styled Components</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
            <Image src={code} alt="Programação" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Desenvolvendo soluções!
            </h3>
            <p className="py-2">
              Desenvolvimento de aplicações web, mobile, etc.
            </p>

            <h4 className="py-4 text-teal-600">
              Ferramentas de programação que utilizo
            </h4>
            <p className="text-gray-800 py-1">ReactJS</p>
            <p className="text-gray-800 py-1">JavaScript ES6</p>
            <p className="text-gray-800 py-1">Python</p>
            <p className="text-gray-800 py-1">C#</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
            <Image
              src={consulting}
              alt="Consultoria"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Metodologias ágeis e soft skills!
            </h3>
            <p className="py-2">
              Resultados = colaboração + agilidade + inteligência.
            </p>

            <h4 className="py-4 text-teal-600">
              Metodologias e ferramentas de colaboração
            </h4>
            <p className="text-gray-800 py-1">Kanban</p>
            <p className="text-gray-800 py-1">Scrum</p>
            <p className="text-gray-800 py-1">GitHub</p>
            <p className="text-gray-800 py-1">Trello</p>
            <p className="text-gray-800 py-1">Notion</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Projetos</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Alguns dos projetos que desenvolvi na
            {' '}
            <span className="text-teal-500">Trybe</span>
            {' '}
            e em meus estudos
            pessoais.
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              alt="Projeto 1"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              alt="Projeto 2"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              alt="Projeto 3"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              alt="Projeto 4"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              alt="Projeto 5"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              alt="Projeto 6"
              className="rounded-lg object-cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
