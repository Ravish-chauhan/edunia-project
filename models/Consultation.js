const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  topic: String,
  scheduledAt: { type: Date, required: true },
  durationMinutes: Number,
  status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
  meetingLink: String,
  price: { type: Number, default: 0 },
});

ConsultationSchema.index({ mentor: 1, scheduledAt: 1 });

module.exports = mongoose.model("Consultation", ConsultationSchema);
