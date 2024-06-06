import React from "react";

interface FeaturePropsType {
  icon: string;
  title: string;
  description: string;
}

const Feature = (props: FeaturePropsType) => {
  return (
    <div>
      <div>
        <img
          className="h-12 w-12 mb-6"
          src={require(`../../Images/${props.icon}.png`)}
          alt={props.title}
        />
      </div>
      <h2 className="text-[#202533] font-semibold text-base mb-3">
        {props.title}
      </h2>
      <p className="text-[#5C5F6A] text-sm">{props.description}</p>
    </div>
  );
};

export default Feature;
