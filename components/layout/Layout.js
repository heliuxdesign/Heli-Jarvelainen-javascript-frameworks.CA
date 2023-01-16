import Link from "next/link";

export default function Layout({ children }) {
 return (
  <>
   <nav>
   <Link legacyBehavior href="/contact">
    <a>Contact</a>
   </Link>
   <Link legacyBehavior href="/login">
    <a>Login</a>
   </Link>
   </nav>

   <div className="container">{children}</div>
  </>
 );
}