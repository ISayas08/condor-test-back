import { USER_REPOSITORY } from "./../repository";
import { User } from "../shared/types";
import { isEmpty } from "./../shared/utils/objects";

const addUser = () => {
  const newUser: User = {
    userName: "New user",
    userEmail: "Unknown",
    shoppingCartId: "Unassigned"
  };

  return USER_REPOSITORY.addUser(newUser);
};

const updateUser = (userId: string, newUserData: User) => {
  if (userId && !isEmpty(newUserData)) {
    return USER_REPOSITORY.updateUser(userId, newUserData);
  } else return Promise.reject({ status: 400 });
};

const getUser = (userId: string) => {
  if (userId) {
    return USER_REPOSITORY.getUser(userId);
  } else return Promise.reject({ status: 400 });
};

export { addUser, updateUser, getUser };
