const { validateFile } = require("../utils/validateFile");

// Handle POST request
exports.handlePost = (req, res) => {
  const { data, file_b64 } = req.body;

  // Validation
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid data" });
  }

  // Separate numbers and alphabets
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highestLowercase = alphabets
    .filter((item) => /^[a-z]$/.test(item))
    .sort()
    .slice(-1);

  // Handle file validation
  const { fileValid, mimeType, fileSizeKB } = validateFile(file_b64);

  // Construct response
  res.json({
    is_success: true,
    user_id: "amandeep_kumar_16022002",
    email: "amandeep_kumar@srmap.edu.in",
    roll_number: "AP21110010483",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase,
    file_valid: fileValid,
    file_mime_type: mimeType,
    file_size_kb: fileSizeKB,
  });
};

// Handle GET request
exports.handleGet = (req, res) => {
  res.json({ operation_code: 1 });
};
