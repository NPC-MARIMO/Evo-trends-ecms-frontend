import { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FileIcon, UploadCloud, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({
  file,
  isEditMode,
  setFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  const inputRef = useRef(null);
  const handleImageFileChange = (e) => {
    console.log(e.target.files);
    const selectedFile = e.target.files?.[0];

    if (selectedFile) setFile(selectedFile);
  };

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) {
      setFile(droppedFile);
    }
  }

  function handleRemoveImage() {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloud() {

    const data = new FormData();
    data.append("my_file", file);

    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );
    console.log(response);
    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
    }
  }

  useEffect(() => {
    if (file !== null) uploadImageToCloud();
  }, [file]);

  return (
    <>
      <div className="w-full mt-4 max-w-md mx-auto">
        <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-4 ${isEditMode ? 'opacity-30' : ""}`}
        >
          <Input
            ref={inputRef}
            onChange={handleImageFileChange}
            id="image-upload"
            type="file"
            className="hidden"
            disabled={isEditMode}
          />
          {!file ? (
            <Label
              className={`flex flex-col items-center justify-center h-32 cursor-pointer ${isEditMode ? 'cursor-not-allowed' : ""}`}
              htmlFor="image-upload"
            >
              <UploadCloud className="w-10 h-10 text-zinc-600 mb-2" />
              <span className="text-zinc-600">
                Drag & Drop or click to upload
              </span>
            </Label>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <FileIcon className="w-8 h-8 text-primary mr-4" />
              </div>
              <p className="text-sm font-md ">{file.name}</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-600 hover:text-black"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductImageUpload;
