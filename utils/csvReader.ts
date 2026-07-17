import fs from 'fs'
import path from 'path'
import { parse } from "csv-parse/sync";

export function readCsv(filepath: string) {
   const fileContent = fs.readFileSync(filepath);
   const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
   });

   return records;
}