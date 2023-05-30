import mongoose from "mongoose";

const reserveSchema = mongoose.Schema({
    tipo: {
      type: String,
      require: true,
      trim: true
    },
    fecha: {
      type: Date,
      require: true,
      trim: true
    },
    hora: {
      type: String,
      require: true,
      trim: true
    },
    personas: {
      type: Number,
      require: true,
      trim: true
    },
    numeroPersonas: {
      type: Number,
      require: true,
      trim: true
    }
  },{
      timestamps: true
  });
  const Reserve = mongoose.model("Reserva", reserveSchema);
  export default Reserve;
