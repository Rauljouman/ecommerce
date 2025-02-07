import React, { useState, useEffect } from "react";
import { Box, Slider, Checkbox, FormControlLabel, Typography, Stack } from "@mui/material";

const SidebarFilters = ({ products, setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Extraer categorías únicas de los productos
  const categories = [...new Set(products.map((product) => product.category))];

  // Ajustar el precio máximo dinámicamente cuando cambian los productos
  useEffect(() => {
    if (products.length > 0) {
      const maxPrice = Math.max(...products.map((p) => p.price));
      setPriceRange([0, maxPrice]);
    }
  }, [products]);

  // Aplicar filtros en tiempo real
  useEffect(() => {
    const filtered = products.filter((product) => {
      const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return withinPriceRange && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [priceRange, selectedCategories, products, setFilteredProducts]);

  // Manejar cambios en el slider de precios
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Manejar cambios en las categorías seleccionadas
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <Box sx={{ width: 250, position: "sticky", top: 100, bgcolor: "white", borderRadius: 2, boxShadow: 3, p: 2 }}>
      <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
        Filtrar Productos
      </Typography>

      <Typography variant="subtitle2" sx={{ mt: 1, fontSize: 14, fontWeight: "bold" }}>
        Rango de Precios (€)
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={Math.max(...products.map((p) => p.price), 1000)}
        step={0.01}
        sx={{ width: "100%" }}
      />
      <Typography variant="body2">€{priceRange[0]} - €{priceRange[1]}</Typography>

      <Typography variant="subtitle2" sx={{ mt: 2, fontSize: 16, fontWeight: "bold" }}>
        Categorías
      </Typography>
      <Stack spacing={1} sx={{ mt: 1 }}>
        {categories.map((category) => (
          <Box key={category} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              size="small"
            />
            <Typography variant="body2">{category}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SidebarFilters;
