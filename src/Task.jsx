function Task({ title, description, completed, onComplete }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onComplete}>
        {completed ? "Completed" : "Complete"}
      </button>
    </div>
  );
}

export default Task;
