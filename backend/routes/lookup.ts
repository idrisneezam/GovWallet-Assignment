import { Request, Response } from 'express';
import { readMappingFile } from '../utils/file-utils';

export const handleLookup = async (req: Request, res: Response) => {
    try {
        const mappingData = await readMappingFile();
        const staffPassId = req.params.staffPassId;
        const teamName = mappingData.find((entry) => entry.staff_pass_id === staffPassId)?.team_name;

        if (teamName) {
            res.status(200).json({ team_name: teamName });
        } else {
            res.status(404).json({ error: 'Staff pass ID not found in mapping data' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
