import { FaCog } from 'react-icons/fa';
import { PiBinocularsLight } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";
import { BsShieldCheck } from "react-icons/bs";

export interface HeaderSectionProps {
  title: string;
  subtitle: string;
  options: { label: string; description: string }[];
  backgroundImage: string;
}

export interface BenefitsSectionProps {
  benefits: { icon: JSX.Element; title: string; description: string }[];
}

export interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export interface LandingPageProps {
  header: HeaderSectionProps;
  benefits: BenefitsSectionProps;
  faq: FAQSectionProps;
}

export const sampleData: LandingPageProps = {
  header: {
    title: "List Your Property, Hotel, or Short-Stay with Ease",
    subtitle: "LuxeStay helps you showcase your property to thousands of travelers and tenants looking for the perfect place to stay, manage your bookings, and grow your income effortlessly.",
    options: [
      { label: "Hotel/Stays", description: "List your hotel or short-stay rental easily on LuxeStay." },
      { label: "Property", description: "List your apartment, house, or office space for guests." },
    ],
    backgroundImage: "/path/to/your-image.jpg", 
  },
  benefits: {
    benefits: [
      { icon: <PiBinocularsLight/>, title: "Maximize your property's visibility", description: "Whether you’re renting out a hotel room, short-stay, or selling property, LuxeStay offers unparalleled visibility, seamless management, and dedicated support." },
      { icon: <FaCog />, title: "Easily manage listings", description: "No matter your property type, LuxeStay gives you all the tools you need to manage bookings, track payments, and communicate with customers." },
      { icon: <LiaCoinsSolid/>, title: "Earn more with increased sales chances", description: "Set your pricing, offer discounts, and manage availability to optimize your property’s Finance. We help you attract guests while keeping your profits high." },
      { icon: <BsShieldCheck/>, title: "Know your data is safe & secure", description: "We prioritize your safety and that of your guests. LuxeStay ensures secure payments, verified user profiles, and 24/7 support to give you peace of mind." }
    ]
  },
  faq: {
    faqs: [
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." },
      { question: "What happens if my property is damaged by a guest?", answer: "LuxeStay covers property damages under certain terms." }
    ]
  }
};
