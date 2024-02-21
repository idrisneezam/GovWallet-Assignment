import fs from 'fs';
import csvParser from 'csv-parser';
import path from 'path';

const mappingFilePath = path.join(__dirname, '..', 'database', 'staff-id-to-team-mapping-long.csv');
const redemptionFilePath = path.join(__dirname, '..', 'database', 'redemption-data.csv');

export const readMappingFile = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(mappingFilePath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

export const readRedemptionFile = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(redemptionFilePath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};
