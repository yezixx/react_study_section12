import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setPrams] = useSearchParams();
  return <div>Home</div>;
};

export default Home;
