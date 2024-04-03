function Button({ text, onClick }) {
  return (
    <button
      className="border-2s rounded bg-stone-950 text-white text-sm p-2 hover:bg-stone-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
