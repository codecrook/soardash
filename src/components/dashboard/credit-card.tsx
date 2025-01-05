"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CreditCardProps {
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  className?: string;
  type?: "mastercard" | "visa";
}

export function CreditCard({
  cardHolder,
  cardNumber,
  validThru,
  className,
  type = "mastercard",
}: CreditCardProps) {
  // Format card number to show only last 4 digits
  const formattedCardNumber = `•••• •••• •••• ${cardNumber.slice(-4)}`;

  // Format valid thru date (MM/YY)
  const [month, year] = validThru.split("/");
  const formattedValidThru = `${month}/${year.slice(-2)}`;

  return (
    <Card
      className={cn("relative h-[180px] text-white overflow-hidden", className)}
    >
      <div className="p-6 flex flex-col h-full justify-between relative z-10">
        {/* Card Type Logo */}
        <div className="flex justify-end">
          {type === "mastercard" ? (
            <Image
              src="/mastercard.svg"
              alt="Mastercard"
              width={44}
              height={28}
              className="h-7 w-auto"
            />
          ) : (
            <Image
              src="/visa.svg"
              alt="Visa"
              width={44}
              height={28}
              className="h-7 w-auto"
            />
          )}
        </div>

        {/* Card Number */}
        <div className="space-y-6">
          <p className="font-mono text-lg tracking-wider">
            {formattedCardNumber}
          </p>

          {/* Card Holder & Valid Thru */}
          <div className="flex justify-between items-end text-sm">
            <div>
              <p className="text-xs opacity-80 mb-1">CARD HOLDER</p>
              <p>{cardHolder}</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80 mb-1">VALID THRU</p>
              <p>{formattedValidThru}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/20" />
        <div className="absolute left-0 top-0 w-[200px] h-[200px] rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </Card>
  );
}
