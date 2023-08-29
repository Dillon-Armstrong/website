import React, { useState } from 'react';
import Skill from './skill';

export default function SkillsList() {
  const [skills, setSkills] = useState({
    Languages: ['Javascript', 'Typescript'],
    Environment: ['Node.js'],
    Libraries: ['React/React-Native', 'Axios', 'GSAP'],
    Frameworks: ['Express'],
    Testing: ['Jest', 'React-testing-library'],
    Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
  });

  const names = Object.keys(skills);

  return (
    names.map((k) => <Skill key={k} name={k} tools={skills[k]} />)
  );
}
