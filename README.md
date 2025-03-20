# Apaat Report

Apaat Report is a Next.js application designed to allow users to report incidents with image analysis and geolocation support. The application processes image uploads using a custom API, generates unique report IDs, and manages report submissions.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Incident Reporting:** Submit reports with detailed information including title, description, location, and status.
- **Image Analysis:** Upload images to automatically extract report details.
- **Unique Report ID Generation:** Securely generate a unique identifier for each report using SHA-256 hashing.
- **Geolocation Integration:** Capture latitude and longitude coordinates for accurate incident mapping.
- **Next.js Framework:** Leverages Next.js for an optimized React experience with server-side capabilities.

## Technology Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Node.js (API routes provided by Next.js)
- **Image Processing:** Custom API endpoint for analyzing images
- **Hashing & Security:** Node.js crypto module

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd apaat-report
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**

   Create a `.env.local` file in the root directory and add the necessary environment variables (e.g., API keys, database URIs):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   # add other environment variables as needed
   ```

## Usage

1. **Development Server:**

   Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

2. **Building for Production:**

   Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```
   Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

3. **Testing:**

   To run any available tests, use your chosen command:
   ```bash
   npm test
   # or
   yarn test
   ```

## Deployment

The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/). For manual deployments or other platforms, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Project Structure

```
apaat-report/
├── app/                    # Next.js pages and application logic
├── components/             # React components (e.g., ReportForm.tsx)
├── public/                 # Static assets
├── .next/                 # Next.js build output (auto-generated)
├── package.json            # Project configuration and scripts
└── README.md               # This file
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any significant changes. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or concerns, please reach out at [your-email@example.com](mailto:your-email@example.com).
