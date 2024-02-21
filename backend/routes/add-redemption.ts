import { Request, Response } from 'express';
import { readRedemptionFile } from '../utils/file-utils';
import fs from 'fs';
import moment from 'moment';

export const handleAddRedemption = async (req: Request, res: Response) => {
    try {
        const { staff_pass_id, team_name } = req.body;
        const redemptionData = await readRedemptionFile();

        const teamHasRedeemed = redemptionData.some(
            (entry) => entry.team_name === team_name
        );

        if (teamHasRedeemed) {
            res.status(400).json({ error: 'Team has already redeemed' });
            return;
        }

        const newRedemption = {
            staff_pass_id,
            team_name,
            redeemed_at: moment().valueOf(),
        };

        fs.appendFileSync('./database/redemption-data.csv', `${Object.values(newRedemption).join(',')}\n`);
        res.status(200).json({ message: 'Redemption added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
