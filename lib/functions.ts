export function cleanUpMusterName(fileName: string): string {
  return fileName.split("_")[0];
}

export function changeImageUrlToHttps(imageUrl: string): string {
  return imageUrl.substring(0, 4) + "s" + imageUrl.substring(4);
}
