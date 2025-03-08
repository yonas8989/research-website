export const Hero: React.FC = () => {
    return (
      <section className="flex flex-wrap justify-center items-center mt-50 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-60 w-[531px] max-md:max-w-full">
          <div className="max-w-full w-[531px]">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
              <span className="font-light text-[45px]">Great </span>
              <span className="font-bold text-[45px]">Product</span>
              <span className="font-light text-[45px]"> is</span>
              <br />
              built by great teams
            </h1>
            <p className="mt-7 text-lg leading-9 text-slate-600 max-md:max-w-full">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
          </div>
          <button className="gap-2.5 self-start px-8 py-5 mt-20 text-sm font-semibold leading-none bg-blue-600 rounded-md shadow-2xl text-neutral-50 hover:bg-blue-700 transition-colors max-md:px-5 max-md:mt-10">
            Let's get started!
          </button>
        </div>
        <div className="self-stretch my-auto min-w-60 w-[614px] max-md:max-w-full">
          <div className="max-w-full w-[614px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/6edbac42fa6940652015227c93ee44b409217cc4e6a1b4138bd1d3fc9b1bbb01?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="object-contain w-full aspect-[1.12] max-md:max-w-full"
            />
          </div>
        </div>
      </section>
    );
  };
  