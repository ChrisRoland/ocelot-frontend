const ProjectCard = ({
    bg,
    logo,
    title,
    description,
    image,
    link,
    stickyOffset,
    textColor = "text-white",
}) => {
  return (
    <div
      className={`
        max-h-[480px] overflow-y-hidden pl-9 640:pl-14 mb-10
        rounded-3xl sticky top-24 w-full
        bg-[center_top] 
      `}
      style={{
        backgroundImage: `url(${bg})`,
        top: stickyOffset,
      }}
    >
      <div className="grid 1024:flex justify-between gap-8 1024:gap-1 relative">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between py-12">
          <img
            src={logo}
            alt={title}
            className="max-h-[50px] w-auto object-contain object-left"
          />

          <div className="768:mb-16">
            <div className="hidden 768:block">
              <h4 className={`${textColor}`}>{title}</h4>
            </div>
            <p className={`768:max-w-[250px] font-secondary font-medium ${textColor}`}>
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative 768:pt-12">
          <img
            src={image}
            alt={title}
            className="w-full object-cover max-w-[230px] rounded-[12px] -ml-4"
          />

          <div className="bottom-10 right-16 absolute animate-float top-32 768:top-3/4 768:-mt-10">
            <a
              target="_blank"
              href={link}
              className="x-between group h-10 gap-2 primary-button shadow-sm min-w-[165px]"
            >
              <span className="text-sm">View Project</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
