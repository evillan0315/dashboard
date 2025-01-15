"use client";
import { CldImage } from "next-cloudinary";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function CloudinaryUpload() {
  return (
    <CldImage
      src="uploads/imac-code" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      alt={""}
      /*       crop={{
        type: "auto",
        source: true,
      }} */
    />
  );
}
