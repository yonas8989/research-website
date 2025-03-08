import * as React from "react";

interface DecoHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const DecoHeading: React.FC<DecoHeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-center max-w-full text-4xl text-center text-gray-900 leading-[55px] w-[474px] ${className}`}
    >
      <div className="flex bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] min-h-[5px] w-[69px]" />
      <h2 className="mt-5 max-md:max-w-full">{children}</h2>
    </section>
  );
};
