import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-start justify-between flex-wrap p-24 dark:text-gray-10">
      <Link href={"/landingPage"} className="px-3 py-2 border rounded-md ">
        LandingPage
      </Link>
      <Link href={"/login"} className="px-3 py-2 border rounded-md ">
        login
      </Link>
      <Link href={"/confirm-email"} className="px-3 py-2 border rounded-md ">
        Confirm email
      </Link>
      <Link href={"/user-name"} className="px-3 py-2 border rounded-md ">
        Choose username
      </Link>
      <Link href={"/planning"} className="px-3 py-2 border rounded-md ">
        planning
      </Link>
      <Link href={"/intrest"} className="px-3 py-2 border rounded-md ">
        intrest
      </Link>
      <Link href={"/intrest"} className="px-3 py-2 border rounded-md ">
        intrest
      </Link>
      <Link href={"/profile-picture"} className="px-3 py-2 border rounded-md ">
        profile-picture
      </Link>
      <Link href={"/about-you"} className="px-3 py-2 border rounded-md ">
        about-you
      </Link>
      <Link href={"/complete"} className="px-3 py-2 border rounded-md ">
        complete
      </Link>
      <Link href={"/home-page"} className="px-3 py-2 border rounded-md ">
        home
      </Link>
      <Link
        href={"/calendar"}
        className="px-3 py-2 border rounded-md"
      >
        Calendar
      </Link>
      <Link href={"/newsletter"} className="px-3 py-2 border rounded-md ">
        Newsletter
      </Link>
      <Link href={"/membership"} className="px-3 py-2 border rounded-md ">
        Membership
      </Link>
      <Link href={"/shop"} className="px-3 py-2 border rounded-md ">
        shop
      </Link>
      <Link href={"/shop-product"} className="px-3 py-2 border rounded-md ">
        shop product Page
      </Link>
      <Link href={"/podcast"} className="px-3 py-2 border rounded-md ">
        podcast
      </Link>
      <Link href={"/feed-page"} className="px-3 py-2 border rounded-md ">
        feed Page
      </Link>
      <Link href={"/blog"} className="px-3 py-2 border rounded-md ">
        blog
      </Link>
      <Link href={"/blog-page"} className="px-3 py-2 border rounded-md ">
        Blog Page
      </Link>
      <Link href={"/podcast-page"} className="px-3 py-2 border rounded-md ">
        podcast page
      </Link>
      <Link
        href={"/userProfile"}
        className="px-3 py-2 border rounded-md  bg-red text-white"
      >
        userProfile
      </Link>
    </main>
  );
}
