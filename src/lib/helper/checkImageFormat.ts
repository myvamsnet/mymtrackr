export const checkImageFormat = (image: string) => {
  const allowedExtensions = ["png", "jpg", "jpeg", "gif", "svg"];
  if (image) {
    const extension = image.split(".").pop();
    if (extension && allowedExtensions.includes(extension)) {
      return true as boolean;
    }
  }
};
