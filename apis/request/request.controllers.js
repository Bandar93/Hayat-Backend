const Request = require("../../db/model/Request");

exports.requestListFetch = async (req, res, next) => {
  try {
    const requests = await Request.find().populate({
      path: "owner",
      select: "-password",
    });
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
    await Request.deleteOne(req.request._id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.editRequest = async (req, res, next) => {
  try {
    if (!req.user._id.equals(req.request.owner)) {
      return next({ status: 401, message: "Not the Owner" });
    }
    req.body.owner = req.user._id;
    const request = await Request.findByIdAndUpdate(req.request, req.body, {
      new: true,
      runValidators: true,
    }).populate({ path: "owner", select: "-password" });
    return res.status(200).json(request);
  } catch (error) {
    next(error);
  }
};

exports.confirmDonation = async (req, res, next) => {
  try {
    const confirm = await Request.findByIdAndUpdate(req.request, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json(confirm);
  } catch (error) {
    next(error);
  }
};
