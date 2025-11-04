const cors = require("cors");

const allowedOrigins = [
    "http://localhost:3000",
    "https://trouve-ton-artisan.com",
];

const corsOption = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST"],
    credentials: true,
};

module.exports = cors(corsOption);
