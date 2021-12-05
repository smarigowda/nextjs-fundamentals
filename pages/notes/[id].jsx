import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;
  return <h1>Note with id = {id}</h1>;
};
