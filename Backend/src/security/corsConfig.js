const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://" + process.env.FRONTEND_URL + ":5173",
    "https://devoir-trouve-ton-artisan-seven.vercel.app",
];

const corsOption = {
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true);
        }
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log("Origine bloquée:", origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST"],
    credentials: true,
};

module.exports = cors(corsOption);