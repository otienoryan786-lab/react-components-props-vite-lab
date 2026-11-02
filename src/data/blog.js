import logo from "../assets/logo";

const blogData = {
  name: "Pixel & Props",
  image: logo,
  about:
    "A blog about learning React one component at a time, written by a designer who loves clean layouts and clean code.",
  posts: [
    {
      id: 1,
      title: "Components Are Just Design Systems in Code",
      date: "October 30, 2026",
      preview:
        "A button, a card, a header: reusable pieces you build once and use everywhere.",
      minutes: 5,
    },
    {
      id: 2,
      title: "Props: Handing Data Down the Tree",
      date: "October 27, 2026",
      preview:
        "How a parent component passes names, images and text to its children.",
      minutes: 12,
    },
    {
      id: 3,
      title: "Why Every List Item Needs a Key",
      preview: "React's way of telling one list item from the next.",
      minutes: 34,
    },
  ],
};

export default blogData;