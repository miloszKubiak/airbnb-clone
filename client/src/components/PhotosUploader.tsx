import { ChangeEvent, FormEvent, forwardRef, useState } from "react";
import axios from "axios";
import { GoCloudUpload } from "react-icons/all";
import { useForm } from "react-hook-form";

export type PhotosUploaderProps = {
  addedPhotos: string[];
  handleChangePhotos: (prev: any) => void;
  //Dispatch<SetStateAction<string | null>>
};

export const PhotosUploader = ({
  addedPhotos,
  handleChangePhotos,
}: PhotosUploaderProps) => {
  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/uploads/upload-from-device", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        handleChangePhotos((prev: any) => {
          return [...prev, ...filenames];
        });
      });
  };
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div key={link} className="h-32 flex">
              <img
                className="rounded-2xl w-full object-cover"
                src={"http://localhost:4000/uploads/" + link}
                alt=""
              />
            </div>
          ))}
        <label
          className="h-32 flex justify-center items-center border border-black bg-transparent
          rounded-2xl text-4xl p-2 cursor-pointer"
        >
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <span>
            <GoCloudUpload />
          </span>
        </label>
      </div>
    </>
  );
};

// const [photoLink, setPhotoLink] = useState("");
//
// const addPhotoByLink = async (e: FormEvent) => {
//   e.preventDefault();
//   const { data: filename } = await axios.post("/uploads/upload-by-link", {
//     link: photoLink,
//   });
//   handleChangePhotos((prev: any) => {
//     return [...prev, filename];
//   });
//   setPhotoLink("");
// };
