/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

const AboutItems = [
  { label: "Projects completed", number: 3 },
  { label: "Current role", number: null, badge: "Intern" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up"
        >
          <p
            className="text-zinc-300 mb-4 md:mb-8
          md:text-xl md:max-w-[60ch]"
          >
            I&apos;m Sadeep Jayashanka, a Software Engineering graduate from
            NSBM Green University (affiliated with the University of Plymouth,
            UK), specialising in Full-Stack Web Development. I build scalable,
            high-performance web and mobile applications using Node.js, Next.js,
            React, Flutter, and MongoDB — with a strong focus on clean
            architecture, API-driven development, and enterprise-grade security.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {AboutItems.map(({ label, number, badge }, key) => (
              <div key={key}>
                <div
                  className="flex items-center
                md:mb-2"
                >
                  {number !== null ? (
                    <>
                      <span
                        className="text-2xl font-semibold
                      md:text-4xl"
                      >
                        {number}
                      </span>
                      <span
                        className="text-sky-400
                      font-semibold md:text-3xl"
                      >
                        +
                      </span>
                    </>
                  ) : (
                    <span
                      className="text-sm font-semibold px-3 py-1
                    bg-sky-400/20 text-sky-400 rounded-full border border-sky-400/30"
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 mt-1">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
