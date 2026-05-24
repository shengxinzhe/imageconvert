/** Read all entries from a directory reader (API returns batches). */
function readAllDirectoryEntries(
  reader: FileSystemDirectoryReader,
): Promise<FileSystemEntry[]> {
  return new Promise((resolve, reject) => {
    const entries: FileSystemEntry[] = [];
    const readBatch = () => {
      reader.readEntries(
        (batch) => {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries.push(...batch);
          readBatch();
        },
        () => reject(new Error("Failed to read folder")),
      );
    };
    readBatch();
  });
}

async function entryToFiles(entry: FileSystemEntry): Promise<File[]> {
  if (entry.isFile) {
    return new Promise((resolve) => {
      (entry as FileSystemFileEntry).file(
        (file) => resolve([file]),
        () => resolve([]),
      );
    });
  }
  if (entry.isDirectory) {
    const dir = entry as FileSystemDirectoryEntry;
    const reader = dir.createReader();
    const children = await readAllDirectoryEntries(reader);
    const nested = await Promise.all(children.map(entryToFiles));
    return nested.flat();
  }
  return [];
}

/** Flatten dropped files and folder trees from a DataTransfer. */
export async function collectFilesFromDataTransfer(
  dataTransfer: DataTransfer,
): Promise<File[]> {
  const items = dataTransfer.items;
  if (items?.length) {
    const fromEntries: File[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind !== "file") continue;
      const entry = item.webkitGetAsEntry?.();
      if (entry) {
        fromEntries.push(...(await entryToFiles(entry)));
      } else {
        const file = item.getAsFile();
        if (file) fromEntries.push(file);
      }
    }
    if (fromEntries.length) return fromEntries;
  }
  return Array.from(dataTransfer.files);
}
