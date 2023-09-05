import React, { useState } from 'react';
import Skill from './skill';

export default function SkillsList() {
  const [skills] = useState({
    Languages: ['Javascript', 'Typescript'],
    Environment: ['Node.js'],
    Libraries: ['React/React-Native', 'Axios', 'GSAP'],
    Frameworks: ['Express'],
    Testing: ['Jest', 'React-testing-library'],
    Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    DevTools: ['Postman', 'K6', 'Loader.io'],
    Deployment: ['AWS', 'Nginx', 'New relic', 'htop'],
  });

  const names = Object.keys(skills);

  return (
    <ul>
      {names.map((k) => <Skill key={k} name={k} tools={skills[k]} />)}
    </ul>
  );
}
