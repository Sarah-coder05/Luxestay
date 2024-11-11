
export type Reservation = {
    bookingNumber: string;
    property: string;
    guestName?: string;
    checkIn?: string;
    checkOut?: string;
    totalPaid?: string;
    bookedOn?: string;
    status?: string;
  };
  
  export type ReservationTableProps = {
    reservations: Reservation[];
    title?: string;
    onPreviousPage: () => void;
    onNextPage: () => void;
    currentPage: number;
    totalPages: number;
  };
  