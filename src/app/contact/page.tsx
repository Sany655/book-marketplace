import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - PuranBoi",
  description: "Contact the PuranBoi team for any queries, feedback or support. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom">
        <h1 className="page-title text-center mb-6">Contact</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="section-title">আমাদের লিখুন</h2>
            <div className="bg-white rounded-md p-6 shadow-sm">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Subject" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    rows={6}
                    className="resize-none w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  CONTACT US
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="section-title">যোগাযোগ করুন</h2>
            <div className="bg-white rounded-md p-6 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">আমাদের ঠিকানা</h3>
                    <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">ফোন নম্বর</h3>
                    <p className="text-gray-600">+৮৮০১৯১২৩৪৫৬৭৮</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">ইমেইল ঠিকানা</h3>
                    <p className="text-gray-600">contact@puranboi.com</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
