import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A assumenda eos optio officia minima cum eveniet itaque, eius soluta quae perferendis obcaecati totam aperiam excepturi impedit distinctio inventore laudantium fugiat?",
  },
  {
    title: "Why use React?",
    content:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A assumenda eos optio officia minima cum eveniet itaque, eius soluta quae perferendis obcaecati totam aperiam excepturi impedit distinctio inventore laudantium fugiat?",
  },
  {
    title: "How to use React?",
    content:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A assumenda eos optio officia minima cum eveniet itaque, eius soluta quae perferendis obcaecati totam aperiam excepturi impedit distinctio inventore laudantium fugiat?",
  },
];

const options = [
  {
    label: "The Color Red",
    value: 'red'
  },
  {
    label: "The Color Blue",
    value: 'blue'
  },
  {
    label: "The Color Green",
    value: 'green'
  }
]

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={options}/>
    </div>
  );
};
