# QuickRide — Cab Booking System

QuickRide is a real-time cab-booking application with separate experiences for riders and captains (drivers). Riders can request a ride and follow its status; captains can receive and manage ride requests. The app uses Ola Maps services for location search and route/distance information.

## Features

- Rider and captain registration, login, profile, and logout
- Ride requests for auto, car, and moto options, with fare estimates
- Location autocomplete, geocoding, and distance/time lookup through Ola Maps
- Nearby captain discovery and real-time ride updates using Socket.IO
- Captain ride confirmation, OTP-verified ride start, and ride completion
- Protected rider and captain pages

## Tech stack

- **Frontend:** React, Vite, React Router, Tailwind CSS, Socket.IO client
- **Backend:** Node.js, Express, MongoDB/Mongoose, Socket.IO
- **Maps:** Ola Maps API

## Repository structure

```text
.
├── Backend/   # Express API, MongoDB models, ride services, and Socket.IO server
└── frontend/  # React/Vite client
```

## Prerequisites

- Node.js and npm
- A MongoDB connection string
- Ola Maps API key

## Configuration

Create `Backend/.env`:

```env
PORT=3000
DB_CONNECT=mongodb://127.0.0.1:27017/quickride
JWT_SECRET=replace-with-a-long-random-secret
OLA_MAPS_API_KEY=your-ola-maps-api-key
```

Use your actual MongoDB URI and Ola Maps key. Keep secrets out of version control.

Create `frontend/.env`:

```env
VITE_BASE_URL=http://localhost:3000
```

`VITE_BASE_URL` is used by the frontend Socket.IO client and should point to the backend server. If your backend runs elsewhere, update this value accordingly. Restart the Vite dev server after changing environment variables.

## Run locally

Open two terminals from the repository root.

**1. Start the backend:**

```bash
cd Backend
npm install
node server.js
```

The server listens on port `3000` by default, or the port specified by `PORT`. It connects to MongoDB before accepting requests.

**2. Start the frontend:**

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available frontend scripts

Run these from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## API overview

The backend mounts these route groups:

| Prefix | Purpose |
| --- | --- |
| `/users` | Rider registration, login, profile, and logout |
| `/captains` | Captain registration, login, profile, and logout |
| `/rides` | Ride creation, fare lookup, confirmation, start, and end |
| `/maps` | Coordinates, distance/time, and address suggestions |

Authenticated routes require the JWT provided at login, either as a cookie or a bearer token. See `Backend/routes/` for the individual route paths and request validation.

## Notes

- The backend package currently does not define a `start` script; use `node server.js` as shown above.
- The backend package's test script is a placeholder and does not run an application test suite yet.
- Maps and ride features that call external services require a valid Ola Maps API key.
