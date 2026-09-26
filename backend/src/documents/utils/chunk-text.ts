export const chunkText = (
  text: string,
  chunkSize: number = 1000,
  overlap: number = 150,
): string[] => {
  const chunks: string[] = [];
  if (text.trim().length === 0) return chunks;
  if (
    !Number.isInteger(chunkSize) ||
    !Number.isInteger(overlap) ||
    0 > overlap ||
    overlap >= chunkSize
  ) {
    throw RangeError('Значение вне допустимого диапазона');
  }
  let startPos = 0;
  const normalizedText = text.replaceAll('\r\n', '\n');
  while (startPos < normalizedText.length) {
    let endPos = startPos + chunkSize;
    const remainingLength = normalizedText.length - startPos;
    if (remainingLength > chunkSize) {
      const chunkWindow = normalizedText.slice(startPos, endPos);
      const lineBreakIndex = chunkWindow.lastIndexOf('\n\n');
      if (
        lineBreakIndex !== -1 &&
        lineBreakIndex >= chunkSize / 2 &&
        lineBreakIndex + 2 > overlap
      ) {
        endPos = startPos + lineBreakIndex + 2;
      }
    }
    const chunk = normalizedText.slice(startPos, endPos);
    chunks.push(chunk);
    if (endPos >= normalizedText.length) break;
    startPos = endPos - overlap;
  }

  return chunks;
};
