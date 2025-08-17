import { useState } from "react";
import DeliveryForm from "./DeliveryForm";
import RecipientForm from "./RecipientForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";

export default function OrderPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex gap-12 justify-center items-start py-12 h-[100vh] bg-white px-10 2xl:px-20 xl:px-18 lg:px-16 md:px-14 sm:px-10">
      <div className="flex-1">
        {step === 1 && <DeliveryForm onNext={() => setStep(2)} onBack={() => setStep(1)} />}
        {step === 2 && <RecipientForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <PaymentForm onBack={() => setStep(2)} />}
      </div>
      <OrderSummary />
    </div>
  )};