import mongoose from "mongoose";
const HomeSchema = new mongoose.Schema(
  {
    callmonthstart: {
      type: String,
    },

  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("home", HomeSchema);