# 🚖 QuickRide — Cab Booking System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

QuickRide is a real-time cab-booking application with separate experiences for **riders** and **captains** (drivers). Riders can search locations, pick a vehicle, and request a ride. Captains receive ride requests instantly, confirm them, and manage the trip from start to finish.

Location search, geocoding, and distance/time estimates are powered by **Ola Maps**.

---

## ✨ Features

**For riders**
- Register, log in, view profile, and log out
- Location autocomplete and address search
- Choose between **auto**, **car**, and **moto** with fare estimates
- Real-time ride status updates (looking for driver, driver on the way, ride in progress)

**For captains**
- Register, log in, view profile, and log out
- Receive nearby ride requests in real time
- Confirm a ride, start it with an **OTP** from the rider, and mark it complete

**General**
- Protected routes for rider and captain pages
- JWT authentication (cookie or Bearer token) with token blacklisting on logout
- Real-time communication using Socket.IO

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, Tailwind CSS, Socket.IO client |
| Backend | Node.js, Express, MongoDB, Mongoose, Socket.IO |
| Maps | Ola Maps API |
| Auth | JSON Web Tokens (JWT) |

---

## 🔄 How a Ride Works

1. The rider enters pickup and destination (autocomplete via Ola Maps).
2. The app shows fare estimates for auto, car, and moto.
3. The rider requests a ride, and nearby captains are notified over Socket.IO.
4. A captain confirms the ride, and the rider is notified.
5. The captain starts the ride by entering the rider's OTP.
6. The captain finishes the ride when the trip is complete.

---

## 📁 Project Structure

```
.
├── Backend/
│   ├── controllers/     # captain, map, ride, user controllers
│   ├── db/              # MongoDB connection
│   ├── middlewares/     # auth middleware
│   ├── models/          # user, captain, ride, blacklistToken
│   ├── routes/          # captain, maps, ride, user routes
│   ├── services/        # business logic for each module
│   ├── app.js           # Express app setup
│   ├── server.js        # server entry point
│   └── socket.js        # Socket.IO setup
│
└── frontend/
    └── src/
        ├── components/  # ride panels, popups, search, vehicle selection
        ├── context/     # user, captain, and socket contexts
        ├── pages/       # rider and captain pages (login, signup, home, riding)
        ├── App.jsx
        └── main.jsx
```

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A MongoDB connection string (local or MongoDB Atlas)
- An [Ola Maps](https://maps.olakrutrim.com/) API key

---

## ⚙️ Configuration

**Backend** — create `Backend/.env`:

```env
PORT=3000
DB_CONNECT=mongodb://127.0.0.1:27017/quickride
JWT_SECRET=replace-with-a-long-random-secret
OLA_MAPS_API_KEY=your-ola-maps-api-key
```

**Frontend** — create `frontend/.env`:

```env
VITE_BASE_URL=http://localhost:3000
```

> `VITE_BASE_URL` must point to your backend server. Restart the Vite dev server after changing environment variables.
> Never commit `.env` files or real secrets to version control.

---

## 🚀 Run Locally

Open two terminals from the repository root.

**1. Start the backend**

```bash
cd Backend
npm install
node server.js
```

The server runs on port `3000` by default (or the `PORT` you set) and connects to MongoDB before accepting requests.

**2. Start the frontend**

```bash
cd frontend
npm install
npm run dev
```

Open the local URL that Vite prints in the terminal.

---

## 📜 Frontend Scripts

Run these from `frontend/`:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🔌 API Overview

| Prefix | Purpose |
|---|---|
| `/users` | Rider registration, login, profile, and logout |
| `/captains` | Captain registration, login, profile, and logout |
| `/rides` | Ride creation, fare lookup, confirmation, start, and end |
| `/maps` | Coordinates, distance/time, and address suggestions |

Protected routes require the JWT issued at login, sent either as a cookie or as a Bearer token. See `Backend/routes/` for exact paths and request validation.

---

## 📝 Notes

- The backend has no `start` script yet, so use `node server.js`.
- The backend `test` script is a placeholder, and there is no automated test suite yet.
- Map and ride features need a valid Ola Maps API key.

---

## 👩‍💻 Author

**Sukanya Rana** — [GitHub](https://github.com/Sukanya1103) · [LinkedIn](https://www.linkedin.com/in/sukanya-rana-719832345)
