const listProducts = (req: any, res: any) => {
  res.status(200).send({ msg: "List of products" });
};

const productDetail = (req: any, res: any) => {
  res.status(200).send({ msg: "Get one" });
};

const addProduct = (req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
};

export { listProducts, productDetail, addProduct };
