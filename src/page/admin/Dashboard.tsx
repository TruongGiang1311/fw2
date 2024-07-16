
import { Link } from "react-router-dom";
import { Product } from "../../interface/product";




	
	interface Props {
        products: Product[];
        onRemove: (id: any) => void;
    }
    const Dashboard = ({ products, onRemove }: Props) => {
	return (
		<div>
			<h1>Hello Admin</h1>
			<table className="table table-bodered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Tittle</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<Link to={`/product-edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>
								<button className="btn btn-danger" onClick={() => onRemove(item.id)}>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};


export default Dashboard;