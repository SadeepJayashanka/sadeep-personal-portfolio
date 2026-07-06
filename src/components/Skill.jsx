/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    label: "React.js",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    label: "Flutter",
    desc: "Mobile Development",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    label: "Node.js",
    desc: "Backend Runtime",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    label: "Express.js",
    desc: "Node Framework",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    label: "MySQL",
    desc: "Relational Database",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    label: "Firebase",
    desc: "Cloud Platform",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    label: "TypeScript",
    desc: "Typed JavaScript",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    label: "Git & GitHub",
    desc: "Version Control",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    label: "Prisma ORM",
    desc: "Database ORM",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites &amp; applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
