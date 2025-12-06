// import ProjectCard from "./ProjectCard";
// import { projectData } from "./Data/projectsData";




const ProjectSection = () => {
  return (
    <section id="projects" className="app-container mt-14 768:mt-28">
      {/* <div className="relative h-full">
        {projectData.map((p, i) => (
          <ProjectCard key={i} 
            bg={p.title}             
            logo={p.logo}
            title={p.title}
            description={p.description}
            image={p.image}
            link={p.link}
            stickyOffset={p.stickyOffset}
          
          />
        ))}
      </div> */}
    </section>
  );
};

export default ProjectSection;