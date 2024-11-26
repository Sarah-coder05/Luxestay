
export interface Payment {
    date: string;
    id: string;
    amount: string;
    status: "Paid" | "Received";
    purposeIcon: React.ReactNode;
    pdfLink: string;
  }
  