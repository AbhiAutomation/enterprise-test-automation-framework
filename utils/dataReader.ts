import path from "path";
import { readFileSync } from "fs";

import { readCsv } from "./csvReader";
import { readExcel } from "./excelReader";

export function readData(filepath: string, sheetName?: string) {

    const ext = path.extname(filepath).toLowerCase();

    switch (ext) {

        case ".csv":
            console.log("Reading CSV...");
            return readCsv(filepath);

        case ".xlsx":
            console.log("Reading Excel...");
            return readExcel(filepath, sheetName || "Sheet1");

        case ".json":
            console.log("Reading JSON...");
            const jsonData = readFileSync(filepath, "utf-8");
            return JSON.parse(jsonData);

        default:
            throw new Error(`Unsupported file type: ${ext}`);
    }

}