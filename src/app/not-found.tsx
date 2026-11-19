import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1C1C] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[#A1A5AD] mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-md bg-[#FF4545] text-white text-sm font-semibold hover:bg-[#e03a3a]"
      >
        Return Home
      </Link>
    </div>
  );
}
