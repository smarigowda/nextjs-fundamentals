import React from "react";
import Link from "next/link";

export default () => {
  return (
    <div>
      <h1 className="heading">Hello Next.js (index page)</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};
