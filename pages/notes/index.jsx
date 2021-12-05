import React from "react";
import Link from "next/link";

export default () => {
  const notes = new Array(15).fill(1).map((value, index) => {
    return {
      id: index,
      title: `Note: ${index}`,
    };
  });
  // console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>{note.title}</a>
          </Link>
        );
      })}
    </div>
  );
};
