/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SkillPage from './skillpage';

export default function SkillsList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [skillPages] = useState([
    { title: 'Languages', items: ['Javascript', 'ES6', 'Typescript'] },
    { title: 'FrontEnd', items: ['React/React-Native', 'HTML', 'CSS', 'GSAP'] },
    { title: 'BackEnd', items: ['Nodejs', 'Express', 'Nginx', 'PostgreSQL', 'MongoDB', 'MySQL'] },
    { title: 'Testing', items: ['Jest', 'React-testing-library', 'Supertest'] },
    { title: 'DevTools', items: ['Git', 'Webpack', 'Postman', 'K6', 'Loader.io', 'New Relic', 'htop'] },
    { title: 'Platforms', items: ['AWS', 'EC2 RDS'] },
  ]);

  const clickUp = () => {
    if (currentPage === skillPages.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const clickDown = () => {
    if (currentPage === 0) {
      setCurrentPage(skillPages.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage === skillPages.length - 1) {
        setCurrentPage(0);
      } else {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage === 0) {
        setCurrentPage(skillPages.length - 1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    },
    preventScrollOnSwipe: true,
  });

  return (
    <div className="skillPages" {...handlers}>
      <SkillPage name={skillPages[currentPage].title} tools={skillPages[currentPage].items} />
      <div className="setPage">
        <button type="button" onClick={clickDown}>-</button>
        <div>
          {currentPage}
          /
          {skillPages.length - 1}
          ...swipe for more
        </div>
        <button type="button" onClick={clickUp}>+</button>
      </div>
    </div>
  );
}
