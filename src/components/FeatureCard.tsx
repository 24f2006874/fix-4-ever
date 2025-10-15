import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "@/components/Tilt";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Tilt className="will-change-transform">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
      >
        <div className="p-3 bg-success/10 rounded-full mb-4">
          <Icon className="h-6 w-6 text-success" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </motion.div>
    </Tilt>
  );
};

export default FeatureCard;
