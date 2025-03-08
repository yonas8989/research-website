"use client";
import * as React from "react";
import { DecoHeading } from "./DecoHeading";
import { ServiceCard } from "./ServiceCard";
import { ProcessStep } from "./ProcessStep";
import { BlogPostCard } from "./BlogPostCard";
import { motion } from "framer-motion";

export const SoftwareDevelopmentSection: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-16 pt-14 pb-72 bg-slate-50 max-md:px-5 max-md:pb-24">
      <DecoHeading>
        <span style={{ fontWeight: 400 }}>Way of building</span>
        <br />
        Great Project
      </DecoHeading>
      <div className="flex shrink-0 mt-16 rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10" />
      {/* way of building */}
      <section className="mt-20 w-full max-w-[1233px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ServiceCard
              title="Build the right team to scale"
              description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
              highlightedText="Our delivery model helps you cut costs and deliver within budget."
              quote="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              person={{
                imageSrc:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/8a92dbc65d5c7d9f9db721ab80ed7b3d98c41c728c62e1a41a2d7f01ee65d6d5?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313",
                name: "Jeewa markram",
                role: "CEO",
              }}
            />
          </motion.div>
          <div className="flex shrink-0 self-stretch my-auto h-px w-[18px]" />
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5ece749ae17880fe6104eb9a7e563513cbab05963374aaf197f4c7e0e84e713?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
            alt="Software development illustration"
            className="object-contain self-stretch my-auto rounded-xl aspect-[1.22] min-w-60 w-[575px] max-md:max-w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div
          className="flex shrink-0 mt-16 rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-wrap gap-10 justify-between items-center mt-24 w-full max-md:mt-10">
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ad7fde8a2ce4ab668f1352dd1cead8fa6ffd2e5032e1ac8efc46f8df484a87?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
            alt="Software development process"
            className="object-contain self-stretch my-auto rounded-xl aspect-[1.22] min-w-60 w-[575px] max-md:max-w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ServiceCard
              title="Build the right team to scale"
              description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
              highlightedText="Our delivery model helps you cut costs and deliver within budget."
              quote="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              person={{
                imageSrc:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f46a317aecba00327584f25d10d66f1b90f653347d786f62ca9133873e45ef3c?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313",
                name: "Jeewa markram",
                role: "CEO",
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-10 justify-between items-center mt-24 w-full max-md:mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ServiceCard
              title="Build the right team to scale"
              description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
              highlightedText="Our delivery model helps you cut costs and deliver within budget."
              quote="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              person={{
                imageSrc:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/d603274fcd91dbb7dfac70298355bea771d970e5f061e087dc53a4a2f6bc278c?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313",
                name: "Jeewa markram",
                role: "CEO",
              }}
            />
          </motion.div>
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0439fb86a737e06b5496067b3ff62d4741c23d3e8dc664d49082c88ab1dca2b1?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
            alt="Software development team"
            className="object-contain self-stretch my-auto rounded-xl aspect-[1.22] min-w-60 w-[575px] max-md:max-w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
  
      <DecoHeading className="mt-24 max-md:mt-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How development <br />
          <span style={{ fontWeight: 700 }}>through Alcaline works</span>
        </motion.span>
      </DecoHeading>
      <section className="flex flex-wrap gap-1.5 self-end mt-24 mr-6 w-full max-w-[1230px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="z-10 ml-10 w-full max-w-[1059px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <motion.div
                className="w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <ProcessStep
                    number="1"
                    title="Assemble the right team"
                    description="We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
                  />
                  <div className="shrink-0 self-center mt-4 w-0.5 h-[30px]" />
                </div>
              </motion.div>
              <motion.div
                className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <ProcessStep
                    number="3"
                    title="Tech architecture"
                    description="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently"
                  />
                  <div className="shrink-0 self-center mt-4 w-0.5 h-[30px]" />
                </div>
              </motion.div>
              <motion.div
                className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <ProcessStep
                    number="5"
                    title="Code reviews"
                    description="Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells"
                  />
                  <div className="shrink-0 self-center mt-4 w-0.5 h-[30px]" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="shrink-0 h-0.5 max-md:max-w-full" />
          <div className="self-end mr-5 w-full max-w-[1069px] max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <motion.div
                className="w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="shrink-0 self-center w-0.5 h-[30px]" />
                  <ProcessStep
                    number="2"
                    title="Sprint planning"
                    description="Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
                  />
                </div>
              </motion.div>
              <motion.div
                className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="shrink-0 self-center w-0.5 h-[30px]" />
                  <ProcessStep
                    number="4"
                    title="Standups & weekly demos"
                    description="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
                  />
                </div>
              </motion.div>
              <motion.div
                className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="shrink-0 self-center w-0.5 h-[30px]" />
                  <ProcessStep
                    number="6"
                    title="Iterative delivery"
                    description="We divide the implementation process into several checkpoints rather than a single deadline."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3be36d154cec2dcc742d296a1953856b1bb661bf392e9968619cc08647ac126?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
          alt="Process illustration"
          className="object-contain shrink-0 my-auto aspect-square w-[42px]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>
      <section className="flex flex-col items-center self-stretch mt-32 w-full h-[449px] max-md:mt-10 max-md:max-w-full">
        <DecoHeading>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontWeight: 400 }}>Clients And  </span>
            <br />
            Collaborators
          </motion.span>
        </DecoHeading>

        <div className="flex flex-wrap gap-10 items-start mt-16 text-base font-medium max-md:mt-10 max-md:max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BlogPostCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5143d6ba8252abb29da721b56ec8db37f6fb2bde3707ba468e24a1d7b2aa1b48?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
              title="Dashen Bank Sc"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BlogPostCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/03dcdb59039ae93d4a1ce850e4b361ce5df5bdb13e507d61b55ab3b22f54bf4a?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
              title="Ethiopian Agriculture instituete"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BlogPostCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/48502b85101f0f5f126983229846bfaa0066e0cef707aca8bd68b31c036be92b?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
              title="Ethiopia Artifitial intellegence institute "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <BlogPostCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fef135d700beb672f4a4aaf168c32095b2eae0f8e34168be3f80896142b2a283?placeholderIfAbsent=true&apiKey=57008dd1d75646d791eed9e7fd6ed313"
              title="Addis Ababa univeristy"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopmentSection;
