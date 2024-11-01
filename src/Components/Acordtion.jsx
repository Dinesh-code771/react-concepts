import React from "react";

export default function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  // Handle multiple children by mapping through them if necessary
  const AccordionElements = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        activeIndex,
        setActiveIndex,
      });
    }
    return child; // If not a valid element, return as is
  });

  return <div>{AccordionElements}</div>;
}
