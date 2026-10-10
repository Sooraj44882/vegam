function Task({ title, description, completed, onComplete }) {
  return (
    <div className="rounded-lg border border-neutral-700 p-4">
      <h3
        className={`text-lg font-semibold ${completed ? "line-through text-neutral-500" : ""}`}
      >
        {title}
      </h3>

      <p className="mt-1 text-sm text-neutral-400">{description}</p>

      <button
        onClick={onComplete}
        disabled={completed}
        className="mt-3 rounded-lg bg-red-400 px-4 py-2 text-black hover:bg-red-300 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-white"
      >
        {completed ? "Done " : "Complete"}
      </button>
    </div>
  );
}

export default Task;
