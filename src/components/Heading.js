const Heading = ({tag, text, color}) => {
  const Tag = tag || "h1"

  return <Tag className={color}>{text}</Tag>
};

export default Heading;