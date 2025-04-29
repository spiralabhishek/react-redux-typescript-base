import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: boolean;
  showIcon?: boolean;
  className?: string;
}

export function StatusBadge({
  status,
  showIcon = true,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
        className
      )}
    >
      {showIcon &&
        (status ? (
          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
        ) : (
          <XCircle className="mr-1 h-3 w-3 text-red-600" />
        ))}
      <span className="capitalize">{status}</span>
    </span>
  );
}
