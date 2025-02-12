const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 정적 파일 제공 (public 폴더)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
