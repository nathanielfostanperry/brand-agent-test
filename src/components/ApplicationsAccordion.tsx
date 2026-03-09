import { useState } from "react";

const applicationImage =
  "http://localhost:3845/assets/6e647fc0198b014c5fddaa26fb7d193a3db90916.png";
const cornerBracket =
  "http://localhost:3845/assets/db183ea8c508aa45fdb3419d692a6425486a2366.svg";

interface Application {
  id: string;
  title: string;
  description: string;
}

const applications: Application[] = [
  {
    id: "defense",
    title: "Defense",
    description:
      "Materials including copper foil, refined rare earth elements, and EMI shielding are needed for applications ranging from the magnets in fighter jets to the electronic systems that deliver superior intelligence and communications.",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Critical minerals power the infrastructure behind AI compute, from advanced semiconductors to energy storage for data centers.",
  },
  {
    id: "energy",
    title: "Energy",
    description:
      "Domestic supply of materials for renewable energy, grid infrastructure, and electrification across the country.",
  },
  {
    id: "manufacturing",
    title: "Advanced Manufacturing",
    description:
      "High-performance materials enabling next-generation manufacturing across aerospace, automotive, and industrial applications.",
  },
];

export default function ApplicationsAccordion() {
  const [expanded, setExpanded] = useState<string>("defense");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "600px",
      }}
    >
      {/* Left panel — white background with accordion */}
      <div
        style={{
          background: "var(--color-white)",
          padding: "40px 40px 40px 41px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {applications.map((app, index) => {
          const isExpanded = expanded === app.id;
          return (
            <div
              key={app.id}
              style={{
                borderTop:
                  index === 0 ? "1px solid var(--color-gray-3)" : undefined,
                borderBottom: "1px solid var(--color-gray-3)",
              }}
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`panel-${app.id}`}
                id={`trigger-${app.id}`}
                onClick={() => setExpanded(app.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "24px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-headings)",
                  fontWeight: 800,
                  fontSize: "var(--text-subhead)",
                  textTransform: "uppercase" as const,
                  textAlign: "left" as const,
                  color: "var(--color-keystone)",
                  letterSpacing: 0,
                  lineHeight: "var(--leading-headline-md)",
                }}
              >
                <span>{app.title}</span>

                {/* Circle +/− icon — outlined style matching Figma */}
                <span
                  aria-hidden="true"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "1.5px solid var(--color-highlight)",
                    color: "var(--color-highlight)",
                    fontSize: "22px",
                    lineHeight: 1,
                    flexShrink: 0,
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    transition:
                      "border-color var(--duration-normal) ease, color var(--duration-normal) ease",
                  }}
                >
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {/* Expandable description */}
              <div
                id={`panel-${app.id}`}
                role="region"
                aria-labelledby={`trigger-${app.id}`}
                style={{
                  display: isExpanded ? "block" : "none",
                  paddingBottom: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "var(--text-body-lg)",
                    color: "#75757a",
                    lineHeight: "var(--leading-body)",
                    letterSpacing: "0.6px",
                    maxWidth: "490px",
                    margin: 0,
                  }}
                >
                  {app.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right panel — fighter jet image */}
      <div
        style={{
          position: "relative",
          minHeight: "600px",
          borderRadius: "0 80px 0 0",
          overflow: "hidden",
        }}
      >
        <img
          src={applicationImage}
          alt="Fighter jet representing defense applications"
          style={{
            position: "absolute",
            top: 0,
            left: "-35.71%",
            width: "162.6%",
            height: "100%",
            objectFit: "cover",
            maxWidth: "none",
          }}
        />
        {/* Corner bracket decoration — top-left of image panel */}
        <img
          src={cornerBracket}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "45px",
            left: 0,
            width: "26px",
            height: "62px",
            transform: "scaleY(-1) rotate(90deg)",
          }}
        />
      </div>
    </div>
  );
}
