import content from "../content/archives.json" with { type: "json" };

export interface ArchiveRecord {
  id: string;
  title: string;
  en: string;
  department: string;
  category: string;
  date: string;
  lead: string;
  clearance: string;
  abstract: string;
  findings: string[];
  source: string;
}

const leadTranslations: Record<string, string> = {
  "Kristen Wright / Saria": "克丽斯腾·莱特 / 塞雷娅",
  "Engineering Section": "工程科",
  Silence: "赫默",
  "Ferdinand Clooney": "斐尔迪南·克鲁尼",
  Muelsyse: "缪尔赛思",
  Saria: "塞雷娅",
  Mayer: "梅尔",
  Kristen: "克丽斯腾·莱特",
  Magallan: "麦哲伦",
  Ptilopsis: "白面鸮",
  "Silence / Saria": "赫默 / 塞雷娅",
  "Rhine Lab": "莱茵生命",
  "Maylander Foundation": "梅兰德基金会",
  "Dorothy / Rhodes Island": "多萝西 / 罗德岛",
  "Trimounts Laboratory": "特里蒙实验室",
  "Ifrit / Silence": "伊芙利特 / 赫默",
  "Trimounts Project": "特里蒙计划",
  "Ferdinand / Kristen": "斐尔迪南 / 克丽斯腾",
  "Dorothy Franks": "多萝西·弗兰克斯",
  "Dorothy / Ferdinand": "多萝西 / 斐尔迪南",
  "Ifrit / Silence / Saria": "伊芙利特 / 赫默 / 塞雷娅",
  "Investigation Team": "调查小组",
};
const translateLead = (lead: string) => leadTranslations[lead] ?? lead;

export const records: ArchiveRecord[] = content.records.map((record) => ({
  ...record,
  lead: translateLead(record.lead),
  clearance: record.clearance === "RESTRICTED" ? "RESTRICTED" : "REFERENCE AREA",
}));
export const categories = ["全部档案", ...content.categories];
export const archiveColumns = content.columns;

export function columnFiles(lane: number) {
  return records
    .map((record, index) => ({ record, index }))
    .filter(({ record }) => record.category === archiveColumns[lane])
    .map(({ index }) => index);
}
export function fileLocation(index: number) {
  const lane = archiveColumns.indexOf(records[index].category);
  const row = 12 + columnFiles(lane).indexOf(index);
  return { lane, row, slot: lane * 32 + row };
}
export function fileAtSlot(slot: number) {
  const files = columnFiles(Math.floor(slot / 32));
  return files[Math.max(0, Math.min(files.length - 1, (slot % 32) - 12))];
}
