import { Link } from "react-router-dom";
import ListCard from "./ListCard";
const MainList = ({ products }) => {
  return (
    <section className="mainlist">
      <h2>Shop The Latest</h2>
      <Link to="/shopall">View All</Link>
      <ul className="listCon">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainList;
