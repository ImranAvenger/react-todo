export default function TodoControls({
  filter,
  setFilter,
  dispatch,
  hasTodos,
}) {
  return (
    <div className="sl-filter-wrap mt-4 sm:mt-auto sm:pt-6 landscape:mt-auto landscape:pt-6 md:mt-auto md:pt-6 flex flex-wrap gap-2 sm:gap-3 items-center justify-around">
      <div
        role="tablist"
        className="flex p-1 bg-black/40 rounded-xl border border-white/10"
      >
        {["All", "Active", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3 py-2 sm:py-1.5 text-[11px] sm:text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer
              ${filter === tab ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          window.confirm("Clear all?") && dispatch({ type: "CLEAR_ALL" })
        }
        className={`px-3 py-2 rounded-xl bg-red-500/10 ${hasTodos ? "hover:bg-red-500/20 cursor-pointer" : "opacity-50"} border border-red-500/20 text-[10px] font-black uppercase text-red-400`}
        disabled={!hasTodos}
      >
        Clear
      </button>
    </div>
  );
}
