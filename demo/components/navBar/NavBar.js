/** @format */

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar({ session }) {
  const { status } = useSession();
  return (
    <>
      <nav className="header">
        <ul className={`main-nav `}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">POSTS</Link>
          </li>

          {status === "unauthenticated" ? (
            <li>
              <Link
                href="/api/auth/signin"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
