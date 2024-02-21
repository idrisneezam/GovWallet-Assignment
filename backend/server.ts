import express from 'express';
import { handleLookup } from './routes/lookup';
import { handleVerifyRedemption } from './routes/verify-redemption';
import { handleAddRedemption } from './routes/add-redemption';

const app = express();
const port = 8000;

app.use(express.json());

/**
 * Lookup Endpoint
 * 
 * @description Looks up the team_name for a given staff_pass_id.
 * @param {string} staffPassId - The unique staff_pass_id.
 * @returns {Object} - Returns an object with the team_name if found, or an error message if not found.
 */
app.get('/lookup/:staffPassId', handleLookup);

/**
 * Verify Redemption Endpoint
 * 
 * @description Verifies if the team is eligible for redemption based on redemption_data.csv
 * @param {Object} req.body - The request body containing the team_name.
 * @returns {Object} - Returns an object with a boolean 'can_redeem' indicating eligibility, or an error message.
 */
app.post('/verify-redemption', handleVerifyRedemption);

/**
 * Add Redemption Endpoint
 * 
 * @description Adds a new redemption to the redemption_data.csv if the team is eligible for redemption.
 * @param {Object} req.body - The request body containing staff_pass_id and team_name.
 * @returns {Object} - Returns a success message if redemption is added to redemption_data.csv, or an error message if the team isn't eligible.
 */
app.post('/add-redemption', handleAddRedemption);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
