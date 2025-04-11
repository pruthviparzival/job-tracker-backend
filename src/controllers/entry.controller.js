import { addEntry } from "./Entry/add.js";
import { deleteEntry } from "./Entry/delete.js";
import { listEntry } from "./Entry/list.js";
import { listEntryStatus } from "./Entry/listStatus.js";
import { updateEntryStatus } from "./Entry/update.js";

const entryController = {
  add: addEntry,
  update: updateEntryStatus,
  read: listEntry,
  filter: listEntryStatus,
  delete: deleteEntry,
};

export { entryController };
