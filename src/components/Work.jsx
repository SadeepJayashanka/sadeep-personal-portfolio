/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    title: "Secure Task Management System",
    tags: ["Next.js", "TypeScript", "Express.js", "MySQL", "JWT", "RBAC"],
    projectLink: "https://github.com/SadeepJayashanka/task-management-system",
  },
  {
    title: "Emergency Hospital Admission System",
    tags: ["Flutter", "Firebase", "Google Maps API", "Mobile"],
    projectLink: "https://github.com/SadeepJayashanka/patient_mobile_app",
  },
  {
    title: "Library Management System",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    projectLink: "https://github.com/Plymouth-University/coursework-group_35",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div
          className="grid gap-x-4 gap-y-5 grid-cols-
        [repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          {works.map(({ title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
