import * as React from "react";
import { PersonBadge } from "./PersonBadge";

interface ServiceCardProps {
  title: string;
  description: string;
  highlightedText: string;
  quote: string;
  person: {
    imageSrc: string;
    name: string;
    role: string;
  };
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  highlightedText,
  quote,
  person,
  className = "",
}) => {
  return (
    <article
      className={`flex flex-col self-stretch my-auto min-w-60 w-[534px] max-md:max-w-full ${className}`}
    >
      <div className="flex flex-col max-w-full w-[534px]">
        <h2 className="self-start text-3xl font-semibold leading-none text-center text-gray-900">
          {title}
        </h2>
        <div className="mt-8 w-full leading-8">
          <p className="text-lg text-gray-700 max-md:max-w-full">
            {description}
          </p>
          <div className="flex flex-col mt-2.5 max-w-full w-[503px]">
            <p className="text-lg text-gray-700 bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
              {highlightedText}
            </p>
            <blockquote className="flex gap-4 items-start self-start mt-5 text-base italic font-light max-md:max-w-full">
              <div className="flex shrink-0 bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[87px] w-[3px]" />
              <p className="bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] w-[435px] max-md:max-w-full">
                {quote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <PersonBadge
        imageSrc={person.imageSrc}
        name={person.name}
        role={person.role}
      />
    </article>
  );
};
