import * as React from "react";

interface PersonBadgeProps {
  imageSrc: string;
  name: string;
  role: string;
}

export const PersonBadge: React.FC<PersonBadgeProps> = ({
  imageSrc,
  name,
  role,
}) => {
  return (
    <div className="flex gap-2.5 justify-center items-center self-start mt-6">
      <img
        src={imageSrc}
        alt={name}
        className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[41px]"
      />
      <div className="self-stretch my-auto">
        <h3 className="text-base text-gray-900">{name}</h3>
        <p className="mt-1.5 text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
};
