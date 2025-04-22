import React from 'react';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

export function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center w-fit h-fit">
      {icon}
      <h3 className="text-2xl font-semibold tracking-tight mb-2">{name}</h3>
    </div>
  );
}