const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const PORT = 9000;

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://nguyennam2000:H%40inam24082000@blitzchat.5woc5.mongodb.net/blitzchat?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                // useCreateIndex: true,
                // useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const socketIo = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// nhớ thêm cái cors này để tránh bị Exception nhé :D  ở đây mình làm nhanh nên cho phép tất cả các trang đều cors được.

socketIo.on("connection", (socket) => {
  ///Handle khi có connect từ client tới
  console.log("New client connected" + socket.id);

  socket.on("sendDataClient", function (data) {
    // Handle khi có sự kiện tên là sendDataClient từ phía client
    socketIo.emit("sendDataServer", { data }); // phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected"); // Khi client disconnect thì log ra terminal.
  });
});

server.listen(PORT, () => {
  console.log(`Server đang chay tren cong ${PORT}`);
});
