# GovWallet-Assignment

This my (Idris B Neezam) take on take-home assignment for GovTechSG.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Backend

To start the backend Express server, follow these steps:

```bash
cd backend
npm install
npm start
```
## Endpoints

### 1. Lookup Endpoint

- **Description**: Look up the team name for a given staff_pass_id in staff-id-to-team-mapping-long.csv.
- **Endpoint**: `GET /lookup/:staffPassId`
- **Inputs**:
  - `staffPassId` (URL Parameter): The unique staff_pass_id.
- **Outputs**:
  - Success (200): Returns an object with the team_name if found.
  - Not Found (404): Returns an error message if staff_pass_id is not found.
  - Internal Server Error (500): Returns an error message for other server-related issues.

### 2. Verify Redemption Endpoint

- **Description**: Verifies if a team is eligible for redemption based on redeption-data.csv.
- **Endpoint**: `POST /verify-redemption`
- **Inputs**:
  - `team_name` (Request Body): The team_name to be verified for redemption.
- **Outputs**:
  - Success (200): Returns an object with a boolean `can_redeem` indicating eligibility.
  - Team Already Redeemed (400): Returns an error message if the team has already redeemed.
  - Internal Server Error (500): Returns an error message for other server-related issues.

### 3. Add Redemption Endpoint

- **Description**: Adds a new redemption to the redemption-data.csv if the team is eligible.
- **Endpoint**: `POST /add-redemption`
- **Inputs**:
  - `staff_pass_id` (Request Body): The unique staff_pass_id.
  - `team_name` (Request Body): The team_name for redemption.
- **Outputs**:
  - Success (200): Returns a success message if redemption is added to redemption-data.csv.
  - Team Not Eligible (400): Returns an error message if the team isn't eligible for redemption.
  - Internal Server Error (500): Returns an error message for other server-related issues.
