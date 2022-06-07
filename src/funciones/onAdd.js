const onAdd = (count, precio, show) => {
  return( console.log(
    `Agregaste a carrito ${count} productos con un total de $ ${count * precio}`
  ),
  show(false)
  );
};

export default onAdd;

