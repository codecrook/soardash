interface Card {
  id: string;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  type: "mastercard" | "visa";
  isPrimary?: boolean;
}
