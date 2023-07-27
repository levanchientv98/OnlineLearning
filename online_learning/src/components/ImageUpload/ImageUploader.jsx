import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ImageUploader = (props) => {
  const { images } = props;
  // State to store uploaded file
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagesUrl, setImagesUrl] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Tạo reference đến tệp hình ảnh trên Firebase
    const imageRef = ref(storage, `images/${file?.name}`);

    // Tải lên hình ảnh lên Firebase
    const uploadTask = uploadBytesResumable(imageRef, file);

    // Theo dõi tiến trình tải lên
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break; // Add a default case to handle any unhandled states
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImagesUrl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    images(imagesUrl);
    console.log(imagesUrl);
  }, [imagesUrl]);

  return (
    <div>
      <input
        hidden
        type="file"
        accept="images/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploader;
