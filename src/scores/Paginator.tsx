type Props = {
  currentPage: number;
  totalPages: number;
};

function Paginator({ currentPage, totalPages }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-sm ${
            page === currentPage
              ? "bg-primary text-white"
              : "bg-gray-200 dark:bg-slate-700"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
