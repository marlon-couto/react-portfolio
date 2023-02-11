import React from 'react';
import DesignCard from './cards/DesignCard';
import CodeCard from './cards/CodeCard';
import ConsultingCard from './cards/ConsultingCard';
// TODO: adiciona animações e sombra aos cards e corrige tamanho
export default function CardSection() {
  return (
    <section>
      <div className="lg:flex gap-10">
        <DesignCard />
        <CodeCard />
        <ConsultingCard />
      </div>
    </section>
  );
}
