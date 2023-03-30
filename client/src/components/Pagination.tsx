export const Pagination = () => {
  const prevPage = () => {
    console.log("prev page");
  };

  const nextPage = () => {
    console.log("next page");
  };

  return (
    <div className="mt-8 gap-4 flex items-center justify-center">
      <button className="primary" onClick={prevPage}>
        prev
      </button>
      <div>buttons</div>
      <button className="primary" onClick={nextPage}>
        next
      </button>
    </div>
  );
};
