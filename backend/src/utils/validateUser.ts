import Joi from "joi";

const createValidate = (data: object) => {
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(6).max(50),
  });

  return schema.validate(data);
};

const loginValidate = (data: object) => {
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(6).max(50),
  });

  return schema.validate(data);
};

export default {loginValidate, createValidate};
