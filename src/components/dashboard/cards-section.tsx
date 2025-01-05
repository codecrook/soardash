import { CreditCard } from "@/components/dashboard/credit-card";
import { getCards } from "@/lib/helpers";

export async function CardsSection() {
  const cards = await getCards();

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 snap-x">
      {cards.map((card) => (
        <div
          key={card.id}
          className="min-w-[300px] md:min-w-[250px] snap-center"
        >
          <CreditCard
            {...card}
            className={
              card.isPrimary
                ? "bg-gray-900"
                : "bg-gradient-to-r from-blue-600 to-blue-700"
            }
          />
        </div>
      ))}
    </div>
  );
}
