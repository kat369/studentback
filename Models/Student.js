import mongoose from "mongoose";
const HomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    class: {
      type: String,
    },
    gender: {
      type: String,
    },
    card: {
      type: String,
    },
    attendance: {
      type: String,
    },

  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("home", HomeSchema);