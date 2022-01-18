function Pagination({ total, currentPage, onClickCallback }) {
  const pages = new Array(total).fill(0).map((value, index) =>
    currentPage === index + 1 ? (
      <button disabled key={index}>
        {index + 1}
      </button>
    ) : (
      <button
        style={{
          margin: "5px",
          borderRadius: "0.25rem",
          backgroundColor: "white"
        }}
        key={index}
        onClick={() => onClickCallback(index + 1)}
      >
        {" "}
        {index + 1}
      </button>
    )
  );

  return <div>{pages}</div>;
}

export default Pagination;
