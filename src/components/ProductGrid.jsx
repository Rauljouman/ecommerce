import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia component="img" height="140" image={product.imageURL} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>€{product.price}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/product/${product.id}`}
                    sx={{ mt: 1 }}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
            No hay productos disponibles.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
