import Pagination from "react-bootstrap/Pagination";
import "./Paginado.css";

function Paginado(props) {
  const setPageNext = () => {
    props.setPage(props.page + 1);
  };

  const setPagePrevious = () => {
    props.setPage(props.page - 1);
  };

  const setFirstPage = () => {
    props.setPage(1);
  };

  const setLastPage = () => {
    props.setPage(props.totalPages);
  };

  if (props.maxResults === true) {
    return (
      <Pagination className="container mb-4 mt-2">
        <Pagination.First onClick={setFirstPage} />
        <Pagination.Item onClick={setPagePrevious}>
          {props.page - 1}
        </Pagination.Item>
        <Pagination.Item active>{props.page}</Pagination.Item>
        <Pagination.Last disabled />
      </Pagination>
    );
  }

  if (props.page > 1) {
    return (
      <Pagination className="container mb-4 mt-2">
        <Pagination.First onClick={setFirstPage} />
        <Pagination.Item onClick={setPagePrevious}>
          {props.page - 1}
        </Pagination.Item>
        <Pagination.Item active>{props.page}</Pagination.Item>
        <Pagination.Item onClick={setPageNext}>
          {props.page + 1}
        </Pagination.Item>
        <Pagination.Last onClick={setLastPage} />
      </Pagination>
    );
  }

  return (
    <Pagination className="container mb-4 mt-2">
      <Pagination.First disabled />
      <Pagination.Item active>{props.page}</Pagination.Item>
      <Pagination.Item onClick={setPageNext}>{props.page + 1}</Pagination.Item>
      <Pagination.Last onClick={setLastPage} />
    </Pagination>
  );
}

export default Paginado;
