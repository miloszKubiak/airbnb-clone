import { Request, Response } from "express";
import imageDownloader from "image-downloader";
import fs from "fs";

const PATH =
  "D:\\UdemyReactCourseProjects\\airbnb-clone\\server\\src\\uploads\\";

export const uploadByLink = async (req: Request, res: Response) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: PATH + newName,
  });
  res.json(newName);
};

export const uploadFromDevice = (req: Request, res: Response) => {
  const uploadedFiles = [];

  for (let i = 0; i < req.files!.length; i++) {
    const { path, originalname } = (req.files as any)[i];
    const parts = originalname.split(".");
    const fileExtension = parts[parts.length - 1];
    const newPath = path + "." + fileExtension;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace(PATH, ""));
  }
  res.json(uploadedFiles);
};

// export const uploadPhotos = async (req: Request, res: Response) => {};
