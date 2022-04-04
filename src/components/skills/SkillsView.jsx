import React from "react";
import SkillItem from "./SkillItem";

const SkillsView = ({ skills, onClick }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <SkillItem
          isFirst={index === 0}
          key={`${skill.title}-${index}`}
          {...skill}
        />
      ))}
    </div>
  );
};

SkillsView.defaultProps = {
  skills: [],
  onClick: () => undefined,
};

export default SkillsView;
