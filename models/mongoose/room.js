import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    token: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Room', roomSchema);
