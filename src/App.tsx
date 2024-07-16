
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./page/Home";
import Dashboard from "./page/admin/Dashboard";
import Notfound from "./page/NotFound";
import { Product } from "./interface/product";
import { useEffect, useState } from "react";
import { instance } from "./api";

function App() {
  
  const [product, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		})();
	}, []);

	const handleRemove = async (id: any) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(product.filter((item) => item.id !== id));
		}
	};
  return (
    <>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/admin" element={<Dashboard products={product} onRemove={handleRemove} />} />
			<Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;