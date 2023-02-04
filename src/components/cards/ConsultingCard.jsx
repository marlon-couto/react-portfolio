import React from 'react';
import Image from 'next/image';
import consulting from '../../img/consulting.png';

const consultingSkills = ['Kanban', 'Scrum', 'GitHub', 'Trello', 'Notion'];

export default function ConsultingCard() {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
      <Image src={consulting} alt="Consultoria" width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">
        Metodologias ágeis e soft skills!
      </h3>
      <p className="py-2">
        Resultados = colaboração + agilidade + inteligência.
      </p>
      <h4 className="py-4 text-blue-600 dark:text-blue-400">
        Metodologias e ferramentas de colaboração
      </h4>
      {consultingSkills.map((skill) => (
        <p className="text-gray-800 dark:text-neutral-100 py-1" key={skill}>
          {skill}
        </p>
      ))}
    </div>
  );
}
