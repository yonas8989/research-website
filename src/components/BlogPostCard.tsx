import * as React from "react";

interface BlogPostCardProps {
  imageSrc: string;
  title: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <article className="flex flex-col items-end min-w-60 w-[254px]">
      <div className="max-w-full leading-6 text-gray-700 w-[254px]">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain w-full rounded-xl aspect-[1.45]"
        />
        <h3 className="mt-5 w-full rounded-none">{title}</h3>
      </div>
      <div className="flex gap-4 items-center mt-5 leading-loose text-purple-900">
        <span className="self-stretch my-auto">Read More</span>
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
      </div>
    </article>
  );
};
