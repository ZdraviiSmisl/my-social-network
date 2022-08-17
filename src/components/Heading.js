const Heading = ({tag, text, styleHead}) => {
  const Tag = tag || "h1";


  return <Tag className={styleHead}>{text}</Tag>
};

export default Heading;