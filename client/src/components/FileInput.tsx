import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import { GoCloudUpload, MdInsertDriveFile } from "react-icons/all";
import axios from "axios";

export const FileInput = ({ control, name }: any) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value, name } }) => (
        <div>
          <Dropzone
            // onDrop={(acceptedFiles) =>
            //   console.log("acceptedFiles", acceptedFiles)
            // }
            onDrop={(acceptedFiles) => {
              axios.post("/uploads", acceptedFiles).then((response) => {
                const { data: filenames } = response;
                onChange(filenames);
              });
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="h-28 w-1/6 flex justify-center items-center border border-black bg-transparent
          rounded-2xl text-4xl p-2 my-2 cursor-pointer"
              >
                <GoCloudUpload />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
              </div>
            )}
          </Dropzone>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {value.map((f: any, index: any) => {
              return (
                <div className="bg-rose-400" key={index}>
                  <div>
                    <MdInsertDriveFile />
                  </div>
                  <div className="text-xs">
                    <p>{f.name}</p>
                    <p>size: {f.size}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};
