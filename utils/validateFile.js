const validateFile = (fileBase64) => {
  if (!fileBase64) {
    return { fileValid: false, mimeType: null, fileSizeKB: 0 };
  }

  // Decode Base64 to get MIME type and size
  try {
    const buffer = Buffer.from(fileBase64, "base64");
    const mimeType = require("file-type").fromBuffer(buffer)?.mime || "unknown";
    const fileSizeKB = Math.round(buffer.length / 1024);
    const fileValid = mimeType !== "unknown";

    return { fileValid, mimeType, fileSizeKB };
  } catch (error) {
    return { fileValid: false, mimeType: null, fileSizeKB: 0 };
  }
};

module.exports = { validateFile };
