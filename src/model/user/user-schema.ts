import { Schema, model, SchemaTypes } from "mongoose";
import { IUser, IUserModel } from "./types";

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    role: [
      {
        type: SchemaTypes.ObjectId,
        ref: "role"
      }
    ]
  },
  { collection: "user" }
);

export const UserModel = model<IUserModel>("user", userSchema);
