import React from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  //   console.log(router);
  console.log(router.query);
  return <h1>Catch all route</h1>;
};
