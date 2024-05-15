const mongoose = require('mongoose');

const HotelsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [String],
  location: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  price_per_night: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  amenities: [String],
  host: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    is_superhost: {
      type: Boolean,
      default: false,
    },
  },
  reviews_count: {
    type: Number,
    default: 0,
  },
  property_type: {
    type: String,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  max_guests: {
    type: Number,
    required: true,
  },
  check_in_time: {
    type: Date,
    required: true,
  },
  check_out_time: {
    type: Date,
    required: true,
  },
});

export const HotelsModel = mongoose.models.Hotels || mongoose.model('Hotels', HotelsSchema);
