import * as React from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col justify-center px-5 py-6 bg-white rounded-lg border border-solid border-[color:var(--Shade-Primary-lite-bg,#E7DAED)] max-md:px-5">
      <div className="w-full">
        <header className="flex gap-2.5 justify-center items-center text-lg font-bold tracking-normal">
          <span className="my-auto bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]">
            #{number}
          </span>
          <h3 className="self-stretch my-auto text-gray-900">{title}</h3>
        </header>
        <p className="mt-4 text-sm tracking-normal leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </article>
  );
};
