import { createError } from "../error.js";
import User from "../models/User.js"

export const update = async (req, res, next) => {
  if(req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
          $set: req.body
        },
        {
          new: true
        }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      
    }
  }
  else {
    return next(createError(403, "you can update only your account!"))
  }
}

export const deleteUser = async (req, res, next) => {
  if(req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(
        req.params.id,
      )
      res.status(200).json("user has been deleted!")
    } catch (error) {
      
    }
  }
  else {
    return next(createError(403, "you can delete only your account!"))
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: {subscribedUsers: req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id, {
      $inc: {subscribers: 1 }
    })
    res.status(200).json("Subscription successFull!")
  } catch (err) {
    next(err)
  }
}

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {subscribedUsers: req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id, {
      $inc: {subscribers: -1 }
    })
    res.status(200).json("unSubscription successFull!")
  } catch (err) {
    next(err)
  }
}

export const like = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

export const dislike = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}