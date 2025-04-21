import React, { useState, useEffect } from "react";
import { storage, auth, db } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import "./UploadDocs.css";

const UploadDocs = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [docs, setDocs] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [user, setUser] = useState(null);

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        fetchDocuments(firebaseUser.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatusMessage("");
    setUploadProgress(0);
  };

  const handleUpload = () => {
    if (!file || !user) {
      alert("Please select a file and log in first.");
      return;
    }

    const storageRef = ref(storage, `medical-docs/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);
    setStatusMessage("Uploading...");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress.toFixed(0));
      },
      (error) => {
        console.error("Upload error:", error);
        setStatusMessage("❌ Upload failed.");
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(storageRef);

        // Save metadata to Firestore
        await addDoc(collection(db, "documents"), {
          uid: user.uid,
          name: file.name,
          url,
          uploadedAt: serverTimestamp(),
        });

        setDocs((prev) => [...prev, { name: file.name, url }]);
        setStatusMessage("✅ File uploaded!");
        setUploading(false);
        setFile(null);
        setUploadProgress(0);
      }
    );
  };

  const fetchDocuments = async (uid) => {
    const q = query(collection(db, "documents"), where("uid", "==", uid));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => doc.data());
    setDocs(results);
  };

  return (
    <div className="upload-docs">
      <h2>📄 Upload Medical Documents</h2>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${uploadProgress}%` }}>
            {uploadProgress}%
          </div>
        </div>
      )}

      {statusMessage && <p className="status">{statusMessage}</p>}

      <h3>📁 Your Documents</h3>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadDocs;
