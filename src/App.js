import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import SidebarFilters from "./components/SidebarFilters";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AdminDashboard from "./components/AdminDashboard";
import Authentication from "./components/Authentication";
import ContactForm from "./components/ContactForm";
import { Box, CssBaseline } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig"; // Firebase

const App = () => {
  // Estado para almacenar todos los productos y los filtrados
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Obtener los productos desde Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Product"));
        const productList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: data.id,
            name: data.name,
            category: data.category,
            price: parseFloat(data.price) || 0, // Convertimos a número
            stock: parseInt(data.stock, 10) || 0, // Convertimos stock a número
            imageURL: data.imageURL,
            description: data.description,
          };
        });

        console.log("✅ Productos obtenidos de Firestore:", productList);
        setProducts(productList);
        setFilteredProducts(productList); // Mostrar todos los productos por defecto
      } catch (error) {
        console.error("❌ Error obteniendo productos desde Firestore:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Box sx={{ display: "flex", gap: 2, p: 2 }}>
                {/* Pasamos los productos y la función para filtrarlos */}
                <SidebarFilters products={products} setFilteredProducts={setFilteredProducts} />
                <Box sx={{ flex: 1 }}>
                  <Banner />
                  {/* Mostramos los productos filtrados en ProductGrid */}
                  <ProductGrid products={filteredProducts} />
                </Box>
              </Box>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
