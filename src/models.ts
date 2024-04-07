export type expense = {
    amount: number;
    tag: Tags;
  };

export type Tags = "Fuel" | "EMI" | "Bills" | "Family" | "Personal" | "Misc" | "Others" ;