import React from 'react';
import './Skills.css';
import { SiTailwindcss, SiBootstrap, SiMaterialdesign } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiAdobephotoshop, SiVite, SiPostman } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  
  const skillsData = [
    {
      category: "Frontend Core",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ]
    },
    {
      category: "Design & UI",
      items: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Material UI", icon: <SiMaterialdesign /> },
        { name: "Responsive", icon: null },
        { name: "UI Motion", icon: null }
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "REST API", icon: <SiPostman /> }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="card-glow"></div>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill, i) => (
                  <div className="tech-tag" key={i}>
                    {skill.icon && <span className="tag-icon">{skill.icon}</span>}
                    <span className="tag-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;