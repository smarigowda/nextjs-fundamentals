import { useRouter } from "next/router";
import Link from "next/link";
export default () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return (
    <div>
      <h1>Note: {id}</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};
