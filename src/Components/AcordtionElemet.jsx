import React from "react";

export default function AcordtionElemet({
  activeIndex,
  setActiveIndex,
  question,
}) {
  return (
    <div>
      <div
        onClick={() => {
          setActiveIndex(activeIndex === question ? null : question);
        }}
      >
        <h2>{question.title}</h2>
      </div>
      {activeIndex === question && (
        <p>
          <span>Answer:</span> {question.info}
        </p>
      )}
    </div>
  );
}
