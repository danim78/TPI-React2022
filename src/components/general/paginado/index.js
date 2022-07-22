import Pagination from "react-bootstrap/Pagination";
import "./Paginado.css";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function Paginado() {
  return (
    <div className="container">
      <div className="mb-4 mt-2">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}

export default Paginado;
