import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [dialogues, setDialogues] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUploaded(true);
      await sendImageToBackend(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
  });

  const sendImageToBackend = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    setIsUploading(true);
    setUploadProgress(0);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => Math.min(prev + 10, 90));
    }, 200);

    try {
      const response = await fetch("https://nithin521-Manga-Text-Extractor.hf.space/extract-text", {
        method: "POST",
        body: formData,
        headers: {},
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        throw new Error("Failed to extract text from image");
      }

      const data = await response.json();
      setDialogues(data.dialogues);
      setIsUploading(false);
    } catch (error) {
      clearInterval(progressInterval);
      console.error("Error:", error);
      alert("Failed to extract text. Please try again.");
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }
    setImage(null);
    setUploaded(false);
    setDialogues([]);
    setUploadProgress(0);
  };

  return (
    <div className="upload" id="upload">
      <h2>{uploaded ? "Upload another image" : "Upload Your Manga Page"}</h2>

      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />

        <div className="drop-area">
          {!image && (
            <>
              <p>
                {isDragActive
                  ? "Drop the image here..."
                  : "Drag and drop your manga page here, or click to select"}
              </p>
              <button type="button" className="uploadButton">
                Upload Image
              </button>
            </>
          )}

          {image && (
            <div className="image-preview">
              <img src={image} alt="Uploaded Preview" />
              {!isUploading && (
                <button
                  className="remove-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                >
                  ×
                </button>
              )}
            </div>
          )}

          {isUploading && (
            <div className="upload-progress">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <div className="progress-text">{uploadProgress}% Uploaded</div>
              <h2>Might take 1-2 mins to process</h2>
            </div>
          )}
        </div>
      </div>

      {dialogues.length > 0 && (
        <>
          <h3>Extracted Dialogues:</h3>
          <ul className="dialogue-list">
            {dialogues.map((text, index) => (
              <li key={index} className="dialogue-item">
                {text.toUpperCase()}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Upload;
