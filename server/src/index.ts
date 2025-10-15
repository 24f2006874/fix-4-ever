import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./db";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Simple in-memory store for demo purposes only
type Booking = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  deviceType: string;
  issueDescription: string;
  preferredDate?: string;
  createdAt: string;
};

const bookings: Booking[] = [];

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Public services (static for now)
app.get("/api/services", (_req: Request, res: Response) => {
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

// Contact message (persist)
app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "name, email, subject and message are required" });
  }
  const saved = await prisma.contactMessage.create({
    data: { name, email, subject, message },
  });
  res.json(saved);
});

// Create a booking
app.post("/api/bookings", async (req: Request, res: Response) => {
  const { name, phone, email, city, location, brand, deviceType, issueDescription, preferredDate } = req.body || {};
  if (!name || !phone || !deviceType || !issueDescription) {
    return res.status(400).json({
      error: "name, phone, deviceType and issueDescription are required",
    });
  }
  const saved = await prisma.booking.create({
    data: {
      name,
      phone,
      email,
      city,
      location,
      brand,
      deviceType,
      issueDescription,
      preferredDate: preferredDate ? new Date(preferredDate) : undefined,
    },
  });
  res.status(201).json(saved);
});

// List bookings (for demo/testing)
app.get("/api/bookings", async (_req: Request, res: Response) => {
  const all = await prisma.booking.findMany({ orderBy: { createdAt: "desc" } });
  res.json(all);
});

// Vendor application
app.post("/api/vendors", async (req: Request, res: Response) => {
  const { name, phone, email, city, experience, expertise, about } = req.body || {};
  if (!name || !phone || !email || !city || !experience || !Array.isArray(expertise) || !about) {
    return res.status(400).json({ error: "missing required fields" });
  }
  const saved = await prisma.vendorApplication.create({
    data: { name, phone, email, city, experience, expertise: expertise.join(","), about },
  });
  res.status(201).json(saved);
});

// List vendor applications
app.get("/api/vendors", async (_req: Request, res: Response) => {
  const vendors = await prisma.vendorApplication.findMany({ orderBy: { createdAt: "desc" } });
  res.json(vendors);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${port}`);
});


