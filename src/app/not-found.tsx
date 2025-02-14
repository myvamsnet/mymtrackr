import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <Image
          src="/images/not-found.svg"
          alt="Page Not Found"
          className="mx-auto h-56 w-auto sm:h-64"
          width={300}
          height={224}
        />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops! This page doesn’t exist.
        </h1>

        <p className="mt-4 text-gray-500">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-6">
          <Link
            href="/home"
            className="inline-block text-base py-2 px-5 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
