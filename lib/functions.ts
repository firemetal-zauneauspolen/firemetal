export function cleanUpMusterName(fileName: string): string {
  return fileName.split("_")[0];
}
