import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="SR Software Engineer"
            company="Zup Innovation"
            companyLink="https://www.zup.com.br/"
            time="2022-Present"
            address="Uberlândia - MG"
            work={
              <>
                {`I worked for one of the largest telecommunications companies in
                the Brazilian market. I helped build the Design System and the
                reusable component library for all the company's web
                applications, and I also promoted and implemented a new
                Microfrontend architecture for the applications.`}
              </>
            }
          />

          <Details
            position="PL Software Engineer"
            company="Labsit"
            companyLink="https://www.labsit.io/"
            time="2021-2022"
            address="São Paulo - SP"
            work="
            In this opportunity, I worked in the mobile and WEB areas for one of the largest HealthTech companies in the Brazilian market."
          />

          <Details
            position="JR Software Developer"
            company="Getinfo"
            companyLink="https://www.getinfo.net.br/"
            time="2020-2021"
            address="Aracaju - SE"
            work="My highlight and greatest challenge in this company was proposing and implementing a standardized architectural model for front-end stack projects. This involved separating the application into modules with their respective responsibilities, applying a standard folder and file structure, and implementing the container-view design pattern for better organization and separation of responsibilities for each application page. Throughout this process, I consistently documented and managed the development process of the projects where I applied this model. The goal was to address inherent problems within the company related to project maintainability while making them more robust and scalable."
          />

          <Details
            position="Freelancer Software Developer"
            company="Freelancer"
            companyLink="https://gustavotx.dev"
            time="2018-2023"
            address="Aracaju - SE"
            work="Worked as a freelancer and developed more than 4 web applications for my business customers using as main technologies React.js, Next.js, Node.js and Express."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
