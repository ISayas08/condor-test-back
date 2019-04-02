const addShoppingCar = (req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
};

const getShoppingCarDetail = (req: any, res: any) => {
  res.status(200).send({ msg: "Get one" });
};

const updateShoppingCar = (req: any, res: any) => {
  res.status(200).send({ msg: "Update one" });
};

export { addShoppingCar, getShoppingCarDetail, updateShoppingCar };
