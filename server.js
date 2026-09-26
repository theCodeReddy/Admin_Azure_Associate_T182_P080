const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Parse JSON requests
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API - department information
app.get("/api/department", (req, res) => {
    res.json({
        name: "Computer Science and Engineering",
        code: "CSE",
        university: "ABC University",
        established: 2010,
        students: 850,
        faculty: 42
    });
});

// API - faculty
app.get("/api/faculty", (req, res) => {
    res.json([
        {
            name: "Dr. Rajesh Kumar",
            designation: "Professor & Head",
            qualification: "Ph.D."
        },
        {
            name: "Dr. Priya Sharma",
            designation: "Associate Professor",
            qualification: "Ph.D."
        },
        {
            name: "Dr. Arun Reddy",
            designation: "Assistant Professor",
            qualification: "Ph.D."
        },
        {
            name: "Ms. Anitha Rao",
            designation: "Assistant Professor",
            qualification: "M.Tech"
        }
    ]);
});

// API - courses
app.get("/api/courses", (req, res) => {
    res.json([
        "Data Structures",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Web Technologies",
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing"
    ]);
});

// API - contact
app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill all fields."
        });
    }

    console.log("Contact request:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: "Your message has been received successfully."
    });
});

// Handle unknown routes
app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`P080 Department Website running on port ${PORT}`);
});