export default function SitemapPage() {
  const pages = [
    "About",
    "Services",
    "Projects",
    "Registrations",
    "Technology",
    "Careers",
    "Investors",
    "Contact"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <div className="bg-navy text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md">
        Home
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {pages.map((page) => (
          <div
            key={page}
            className="bg-white border border-navy px-6 py-3 rounded-lg shadow hover:-translate-y-1 transition"
          >
            {page}
          </div>
        ))}
      </div>

    </div>
  );
}

