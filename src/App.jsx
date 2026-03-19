import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  personalInfo,
  socialLinks,
  stints,
  research,
  skills,
  projects,
  blog,
  education,
} from "./data";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Theme colors (light mode only)
const theme = {
  bg: "#ffffff",
  text: "#000000",
  link: "#1d4ed8",
  secondaryText: "#666666",
};

const linkStyle = { color: theme.link, textDecoration: "underline" };

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: '"JetBrains Mono", "Courier New", Courier, monospace',
        fontSize: "14px",
        lineHeight: "1.7",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 40px",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ marginBottom: "24px" }}
        >
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              marginBottom: "4px",
            }}
          >
            {personalInfo.name}
          </h1>
          <p style={{ color: theme.secondaryText }}>{personalInfo.tagline}</p>
        </motion.header>

        {/* Stints Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <h2 style={{ fontSize: "16px", marginBottom: "16px" }}>Stints:</h2>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ listStyleType: "disc", paddingLeft: "24px" }}
          >
            {stints.map((stint, index) => (
              <motion.li
                key={index}
                variants={fadeInItem}
                style={{ marginBottom: "6px" }}
              >
                {stint.role}{" "}
                <a
                  href={stint.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {stint.company}
                </a>
                ; {stint.description}
              </motion.li>
            ))}

            {/* Selected Research as nested list */}
            <motion.li variants={fadeInItem} style={{ marginBottom: "6px" }}>
              Selected Research
              <motion.ul
                variants={staggerContainer}
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {research.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInItem}
                    style={{ marginBottom: "6px" }}
                  >
                    {item.title} {item.prefix && item.prefix}
                    {!item.prefix && "with "}
                    <a href={item.url} style={linkStyle}>
                      {item.collaborator}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Skills
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInItem}
                    style={{ marginBottom: "6px" }}
                  >
                    <span style={{ color: theme.secondaryText }}>
                      {skill.category}:
                    </span>{" "}
                    {skill.items}
                  </motion.li>
                ))}
              </motion.ul>
            </li>
          </ul>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Projects
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInItem}
                    style={{ marginBottom: "6px" }}
                  >
                    <a href={project.url} style={linkStyle}>
                      {project.name}
                    </a>{" "}
                    - {project.description}
                  </motion.li>
                ))}
              </motion.ul>
            </li>
          </ul>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Blog
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {blog.map((post, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInItem}
                    style={{ marginBottom: "6px" }}
                  >
                    <a href={post.url} style={linkStyle}>
                      {post.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </li>
          </ul>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Education
              <div style={{ marginLeft: "24px", marginTop: "6px" }}>
                <a
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {education.institution}
                </a>
                <p style={{ marginTop: "2px", color: theme.secondaryText }}>
                  {education.degree}
                </p>
                <p style={{ color: theme.secondaryText }}>{education.period}</p>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Personal Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "8px" }}
        >
          <p>{personalInfo.bio}</p>
        </motion.section>

        {/* Current Work */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          style={{ marginBottom: "32px" }}
        >
          <p style={{ color: theme.secondaryText }}>
            {personalInfo.currentWork}
          </p>
        </motion.section>

        {/* Footer/Contact */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div style={{ marginBottom: "4px" }}>
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              github
            </motion.a>{" "}
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              linkedin
            </motion.a>{" "}
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              twitter
            </motion.a>
          </div>
          <div>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              style={linkStyle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {personalInfo.email}
            </motion.a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
