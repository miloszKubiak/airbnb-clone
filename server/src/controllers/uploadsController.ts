import { Request, Response } from "express";
import imageDownloader from "image-downloader";

export const uploadByLink = async (req: Request, res: Response) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest:
      "D:\\UdemyReactCourseProjects\\airbnb-clone\\server\\src\\uploads/" +
      newName,
  });
  res.json(newName);
};
