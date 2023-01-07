/** @format */

import React from "react";
import { getSession } from "next-auth/react";

export default function CreatePost({ session }) {
  if (session === null) return <>Not Logged In</>;
  return <div>CreatePost</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
