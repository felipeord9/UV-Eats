const UserService = require("../services/userService");

/* busqueda de usuaruis depenpiendo del estado y el rol */
const findAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const findAllUsersNoBene = async (req, res, next) => {
  try {
    const data = await UserService.findNoBene();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const findAllUsersBene = async (req, res, next) => {
  try {
    const data = await UserService.findBene();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const findAllUsersOficial = async (req, res, next) => {
  try {
    const data = await UserService.findOficial();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};


/*  */

const findOneUser = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await UserService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createUser = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await UserService.create(body)
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await UserService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await UserService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllUsers,
  findAllUsersBene,
  findAllUsersNoBene,
  findAllUsersOficial,
  findOneUser,
  createUser,
  updateUser,
  deleteUser
};