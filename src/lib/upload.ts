/* eslint-disable @typescript-eslint/no-explicit-any */
import cloudinary from "./cloudinary";

export async function uploadFile(
  fileBuffer: Buffer,
  folder: string,
  publicId: string,
  resourceType: "image" | "raw" = "image"
) {
  return new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: publicId,
          resource_type: resourceType,
          type: "upload",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(fileBuffer);
  });
}