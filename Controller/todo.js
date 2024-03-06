import Task from "../models/Task.js";
export const todoController = async (req, res) => {
  try {
    const task = await Task.find({});
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Todo Fetched Successfully",
      task,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};

export const todoAddController = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(404).send({
        success: false,
        message: "please enter all filed",
      });
    }
    const task = await Task.create({
      title,
      description,
    });

    res.status(201).send({
      success: true,
      message: "Task is added",
      task,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};
export const todoUpdateController = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findById(req.params.id);
    console.log(completed);
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "id is not found",
      });
    }
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;
    await task.save();
    res.status(201).send({
      success: true,
      message: "Task is updated",
      task,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};

export const todoDeleteController = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });

    if (!task) {
      return res.status(404).send({
        success: false,
        message: "id is not found",
      });
    }
    await Task.deleteById;
    res.status(200).send({
      success: true,
      message: "Task is deleted",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};
export const todoDeleteManyController = async (req, res) => {
  try {
    const { completed } = req.body;
    const task = await Task.deleteMany({ completed: completed });

    if (!task) {
      return res.status(404).send({
        success: false,
        message: "id is not found",
      });
    }
    await Task.deleteById;
    res.status(200).send({
      success: true,
      message: "All Selected Task is deleted",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};

export const singleTodoController = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send({
        success: false,
        message: "id is not found",
      });
    }
    await Task.deleteById;
    res.status(200).send({
      success: true,
      message: "Todo is fetched",
      task,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: "internal server error",
      task,
    });
  }
};
