const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  city: { type: String, index: true },
  state: String,
  country: { type: String, default: "India" },
  ranking: Number,
  fees: {
    avgAnnual: Number,
    currency: { type: String, default: "INR" },
  },
  courses: [
    {
      name: String,
      durationMonths: Number,
      eligibility: String,
    },
  ],
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// For search
CollegeSchema.index({ name: "text", city: "text", tags: "text" });

module.exports = mongoose.model("College", CollegeSchema);
