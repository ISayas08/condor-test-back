const addShoppingCart = (req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
};

const getShoppingCartDetail = (req: any, res: any) => {
  res.status(200).send({ msg: "Get one" });
};

const updateShoppingCart = (req: any, res: any) => {
  res.status(200).send({ msg: "Update one" });
};

export { addShoppingCart, getShoppingCartDetail, updateShoppingCart };
