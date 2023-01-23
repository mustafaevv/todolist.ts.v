interface Props {
  name: string;
  link: string;
}

const links: Props[] = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "todo",
    link: "/todo",
  },
  {
    name: "about",
    link: "/about",
  },
];

export default links;
