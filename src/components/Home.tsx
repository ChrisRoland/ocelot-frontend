import React from "react";
import { motion } from "motion/react";
import Footer from "./Footer";
import ContactUsInfo from "./ContactUsInfo";
import { steps } from "../utils";
// import HeaderContainer from './HeaderContainer';
// import SpinningBackground from './SpinningBackground';
import { ThreeJSBackground } from "./ThreeJSBackground";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black relative w-full h-screen overflow-hidden">
        {/* Three.js Background */}
        <ThreeJSBackground />

        {/* Hero Content - positioned but doesn't block canvas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-6 lg:left-20 -translate-y-1/2 flex flex-col gap-5 p-10"
          style={{ zIndex: 10, maxWidth: "calc(100% - 3rem)" }}
        >
          <h1 className="text-xl lg:text-[88px] leading-[92px] font-bold text-white font-primary">
            Transforming bold ideas into{" "}
            <span className="main-gradient font-Montserrat">
              breakthrough solutions
            </span>
          </h1>
          <p className="font-secondary text-neutral-50 leading-6 1024:leading-[26px] 1300:leading-[30px] tracking-[-0.32px] 740:tracking-[-0.4px] text-base 1300:text-[20px] font-normal 768:text-left md:max-w-[600px]">
            Partner with us to bring your vision to life. We combine strategic
            thinking with flawless execution, delivering end-to-end solutions
            that drive real impact. From concept to launch and beyond, we're
            your trusted technology partner committed to turning ambitious ideas
            into market-ready innovations.
          </p>
          <button className="flex items-center justify-between text-[10px] w-35 py-0.5 px-3 font-semibold font-Montserrat rounded-lg btn-blue text-white transition-all duration-300 ease-in-out group mt-2 cursor-pointer">
            <span>Get Started</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </motion.div>
      </section>

      {/* <SpinningBackground /> */}
      <section className="flex justify-center items-center custom-container">
        <div className="pt-5">
          <p
            className="text-left mt-7 font-semibold font-primary text-black text-[44px] 480:text-[60px] 640:text-[91px] leading-[50px]
					480:leading-[64px] 640:leading-[95px] w-full 768:w-3/4
					
					"
          >
            You dream, we build
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 mt-5">
            <div className="h-full w-100 lg:w-full lg:col-span-3">
              <img
                className="rounded-2xl"
                src="https://ocelotgroup.org/_next/static/media/1537.a3a7716b.jpg"
                alt=""
              />
            </div>
            <div className="lg:col-span-4">
              <div>
                <div className="text-neutral-600 font-normal mb-7 text-[13px]">
                  Ocelot is a compact team of experienced technologists and
                  strategists who specialize in bringing bold ideas to life. In
                  simple terms, we solve problems, build dreams, and do it in a
                  timely, efficient, and cost-effective manner. We exist to
                  ensure that great ideas don't die due to poor execution or
                  weak operational structures.
                </div>

                <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-5">
                  <div className="flex flex-col justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-neutral-800 font-primary">
                        About Us
                      </h3>
                      <p className="text-neutral-600 text-[12px] font-normal tracking-[-0.35px] md:max-w-[200px]">
                        In technology, speed and grit are everything. At Ocelot,
                        we see ourselves as a small, agile team building
                        solutions that transform the way businesses operate.
                      </p>
                    </div>
                    <button className="flex gap-2 items-center text-blue-400">
                      <span>Read More</span>
                      <span className="p-2 rounded-[50%] bg-gray-300 ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          class="h-3.5 w-3.5 rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <div>
                      <h3 className="font-primary font-bold text-xl text-neutral-800">
                        Our Services
                      </h3>
                      <p className="text-neutral-600 font-family text-[12px] font-normal tracking-[-0.5px] md:max-w-[200px]">
                        From product design & development to business strategy &
                        operational consulting, we provide end-to-end solutions
                        with real-time communication and adaptive iteration
                      </p>
                    </div>

                    <button className="flex gap-2 items-center text-blue-400">
                      <span>Read More</span>
                      <span className="p-2 rounded-[50%] bg-gray-300 ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          class="h-3.5 w-3.5 rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full text-white custom-container">
        <div className="p-10">
          <div className="flex gap-2 items-center">
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white"
              >
                <circle cx="7" cy="7" r="7" fill="currentColor"></circle>
              </svg>
            </span>
            <span>Our four step approach</span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {steps.map((step) => (
              <div key={step.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h4 className="text-primary-main text-[50px] leading-[50px] 768:leading-[100px] 768:text-[100px] mb-1">
                    <span className="inline-flex font-semibold items-center space-x-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      {step.id}
                    </span>
                  </h4>

                  <h3 className="font-bold text-2xl">{step.title}</h3>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-neutral-400 text-[13px]"
                >
                  {step.description}
                </motion.p>
              </div>
            ))}
          </div>

          <div className="mt-10 w-[100] lg:w-full">
            <img
              className="w-full rounded-2xl"
              src="https://ocelotgroup.org/_next/static/media/planning.1b97172c.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <ContactUsInfo />

      <Footer />
    </>
  );
};

export default Home;
