import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <div>{params.id}번 edit.</div>;
};

export default Edit;
