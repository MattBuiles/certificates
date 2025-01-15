const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Middleware to validate file types
const validateFileType = (req, res, next) => {
  if (!req.path.endsWith('.pdf')) {
    return res.status(400).send('Only PDF files are allowed');
  }
  next();
};

// List certificates endpoint
app.get("/certificates", (req, res) => {
  const directoryPath = path.join(__dirname, "certificates");

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Directory read error:', err);
      return res.status(500).json({
        error: "Error listing certificates",
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }

    const certificates = files
      .filter(file => file.endsWith('.pdf'))
      .map((file) => {
        const title = file.replace(/_/g, " ").replace(".pdf", "");
        return {
          title,
          filename: file,
          institution: "Unknown", 
          link: `${req.protocol}://${req.get('host')}/certificates/${file}`,
        };
      });

    res.json(certificates);
  });
});

// Serve PDF files with validation
app.use("/certificates", validateFileType, express.static(path.join(__dirname, "certificates"), {
  setHeaders: (res) => {
    res.set('Content-Type', 'application/pdf');
    res.set('X-Content-Type-Options', 'nosniff');
  }
}));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
