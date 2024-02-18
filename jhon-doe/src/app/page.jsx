import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-start justify-between p-24">
      <Link href={"/landingPage"} className="px-3 py-2 border rounded-md ">
        LandingPage
      </Link>
    </main>
  );
}
