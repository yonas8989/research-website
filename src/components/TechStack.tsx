import React from "react";

export const TechStack: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full text-4xl text-center text-gray-900 leading-[55px] w-[474px]">
        <div className="flex bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] min-h-[5px] w-[69px]" />
        <h2 className="mt-5 max-md:max-w-full">
          Our
          <br />
          <span className="font-bold">Tech Stack</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 items-start mt-10 text-lg leading-loose">
        <button className="flex flex-col font-semibold rounded w-[76px]">
          <span className="bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]">
            Backend
          </span>
          <div className="flex shrink-0 self-center rounded bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[3px] w-[25px]" />
        </button>
        <button className="text-gray-900">Frontend</button>
        <button className="text-gray-900">Databases</button>
        <button className="text-gray-900">CMS</button>
        <button className="text-gray-900">CloudTesting</button>
        <button className="text-gray-900">DevOps</button>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center mt-20 max-md:mt-10">
        {[
          "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/3c21559a6947f2eedc18eef6d6980b7d83c9d9fbdc3c201a91daae78a1e0ced8?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/d3f13706ea6f1b1a770094588ba25223b88f458fd6f784237c5f84a5d9122729?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/be85f4e07bee277159b04a96ec4dc8518754d05698a49392f46cf985a056d210?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/e0326f732192227d2cf8e6d0a8cab73503465717cdbed6009f9c5e85f49868c5?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/e5799970f38eab948e25ef34b849ef0c2f6149f970d8476c306593e95e0a1382?placeholderIfAbsent=true",
        ].map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Tech stack ${index + 1}`}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.77] w-[166px]"
          />
        ))}
      </div>
    </section>
  );
};
