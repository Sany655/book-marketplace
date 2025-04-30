import Image from "next/image";

const steps = [
  {
    id: "register",
    icon: "/images/step1.png",
    title: "রেজিস্টার করুন",
    description:
      "PuranBoi.com এ একাউন্ট খুলুন। আপনার নাম, ইমেইল, মোবাইল নাম্বার দিয়ে একাউন্ট তৈরি করুন। পাসওয়ার্ড দিয়ে সাইন ইন করুন।",
  },
  {
    id: "listing",
    icon: "/images/step2.png",
    title: "লিস্টিং করুন",
    description:
      "আপনার পুরাতন বইয়ের তথ্য, ছবি, দাম ইত্যাদি যোগ করুন। আপনার অবস্থান ও যোগাযোগের তথ্য যোগ করুন।",
  },
  {
    id: "sell",
    icon: "/images/step1.png",
    title: "বিক্রয়",
    description:
      "আগ্রহী ক্রেতার সাথে যোগাযোগ করুন। পুরাতন বই সহজেই বিক্রি করুন অথবা কিনুন।",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-16 pattern-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            দ্রুত পুরাতন বই বিক্রি করুন অথবা খরিদ করুন
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            আপনার কাছে থাকা পুরাতন বই গুলো বিক্রি করতে চান? Puranboi.com এর মাধ্যমে খুব সহজেই করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">0</div>
              <p className="text-gray-600">বিক্রয় সংখ্যা</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">0</div>
              <p className="text-gray-600">রেজিস্টার</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">0</div>
              <p className="text-gray-600">লিস্টিং</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
