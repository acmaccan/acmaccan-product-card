# acmaccan-product-card

Este es un paquete de pruebas de despliegue en NPM.

## Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductName } from 'acmaccan-product-card'
```

```
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }} >
  {({ reset, count, increaseBy, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductName />
      <ProductButtons />
    </>
  )}
</ProductCard>
```