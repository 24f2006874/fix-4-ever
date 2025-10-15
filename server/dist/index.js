"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 3001);
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json());
const bookings = [];
// Health check
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
// Public services (static for now)
app.get("/api/services", (_req, res) => {
    res.json([
        {
            key: "laptop-repair",
            title: "Laptop Repair",
            description: "Screens, keyboards, batteries, motherboards",
        },
        {
            key: "phone-repair",
            title: "Phone Repair",
            description: "Display, camera, charging port, battery, water damage",
        },
        {
            key: "desktop-repair",
            title: "Desktop Repair",
            description: "Hardware upgrades, software fixes, virus removal",
        },
        {
            key: "software-os",
            title: "Software & OS",
            description: "Installation, updates, troubleshooting, optimization",
        },
    ]);
});
// Contact message (echo + pretend persistence)
app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body || {};
    if (!name || !phone || !message) {
        return res.status(400).json({ error: "name, phone and message are required" });
    }
    res.json({ success: true });
});
// Create a booking
app.post("/api/bookings", (req, res) => {
    const { name, phone, email, deviceType, issueDescription, preferredDate } = req.body || {};
    if (!name || !phone || !deviceType || !issueDescription) {
        return res.status(400).json({
            error: "name, phone, deviceType and issueDescription are required",
        });
    }
    const booking = {
        id: Math.random().toString(36).slice(2),
        name,
        phone,
        email,
        deviceType,
        issueDescription,
        preferredDate,
        createdAt: new Date().toISOString(),
    };
    bookings.push(booking);
    res.status(201).json(booking);
});
// List bookings (for demo/testing)
app.get("/api/bookings", (_req, res) => {
    res.json(bookings);
});
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on http://localhost:${port}`);
});
