export const LoadMoreButton = ({
  visibleCount,
  setVisibleCount,
  totalLength,
}) => {
  return (
    <div className="cards">
      {visibleCount < totalLength && (
        <div className="load-more">
          <button onClick={() => setVisibleCount((prev) => prev + 12)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
