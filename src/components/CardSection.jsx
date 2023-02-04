import React from 'react';
import DesignCard from './cards/DesignCard';
import CodeCard from './cards/CodeCard';
import ConsultingCard from './cards/ConsultingCard';

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
