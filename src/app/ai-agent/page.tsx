import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-10">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-slate-600">
          Хиймэл оюун ухаант AI AGENT хөгжүүлэх үйлчилгээ(ERP+AI)
        </h1>

        {/* List */}
        <ul className="space-y-6">
          <li className="flex gap-4 p-6 border border-border rounded-xl bg-background hover:border-[#319799]/40 transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#319799]/10 text-[#319799] font-semibold">
              1
            </div>
            <p className="text-xl leading-relaxed">
              Худалдан авагч, харилцагчаас ирсэн санал хүсэлтийг хиймэл оюун ухаан
              ашиглан хүний оролцоогүйгээр боловсруулах
            </p>
          </li>

          <li className="flex gap-4 p-6 border border-border rounded-xl bg-background hover:border-[#319799]/40 transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#319799]/10 text-[#319799] font-semibold">
              2
            </div>
            <p className="text-xl leading-relaxed">
              Худалдан авалт, агуулахын мэдээллийг хиймэл оюун ухаан ашиглан
              шийдвэр гаргах
            </p>
          </li>

          <li className="flex gap-4 p-6 border border-border rounded-xl bg-background hover:border-[#319799]/40 transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#319799]/10 text-[#319799] font-semibold">
              3
            </div>
            <p className="text-xl leading-relaxed">
              Санхүүгийн мэдээлэлд дүн шинжилгээ хийж шийдвэр гаргах
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
