const Request = require("../../db/model/Request");

exports.requestListFetch = async (req, res, next) => {
  try {
    const requests = await Request.find().populate("owner");
    return res.json(requests);
  } catch (error) {
    next(error);
  }
};


exports.fetchRequest = async (requestId, next) => {
  try {
    const request = await Request.findById(requestId);
    return request;
  } catch (error) {
    next(error);
  }
};

exports.requestCreate = async (req, res, next) => {
  try {
    // if (req.file) {
    //   req.file.path = req.file.path.replace("\\", "/");
    //   req.body.image = `/${req.file.path}`;
    // }
    req.body.owner = req.user._id;
    const newRequest = await Request.create(req.body);
    await newRequest.populate({
      path: "owner",
      select: "username",
    });
    return res.status(201).json(newRequest);
  } catch (error) {
    next(error);
  }
};

 
  exports.requestDelete = async (req, res, next) => {
    try {
      if (!req.user._id.equals(req.request.owner)) {
        return next({ status: 401, message: "Not the Owner" });
      }
      await Request.deleteOne(req.request);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
