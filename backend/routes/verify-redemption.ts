import { Request, Response } from 'express';
import { readRedemptionFile } from '../utils/file-utils';

export const handleVerifyRedemption = async (req: Request, res: Response) => {
    try {
        const { team_name } = req.body;
        const redemptionData = await readRedemptionFile();
        const teamHasRedeemed = redemptionData.some((entry) => entry.team_name === team_name);

        if (teamHasRedeemed) {
            res.status(400).json({ error: 'Team has already redeemed' });
            return;
        }

        res.status(200).json({ can_redeem: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
