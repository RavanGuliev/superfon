import React from 'react'

function Corpative() {
  return (
   <section className="bg-white">
      <div className="mx-auto max-[1400px] px-12 py-12 md:py-16 rubik">
        <h1 className="text[22.4px] md:text-[22.4px]  tracking-tight text-[#021523]">Korporativ satış</h1>

        <div className="mt-6 md:mt-8 text-[#0f172a] text-[16px] space-y-4 md:space-y-5 leading-relaxed  md:text-[16px]">
          <p>
            <span className=" text-[16px]">Superfonu seçən QAZANIR!</span>
          </p>

          <p>
            Superfon Azərbaycanın bir çox şəhər və regionları üzrə mobil telefonların, aksesuarların, ehtiyat hissələrinin, kiçik məişət avadanlıqlarının pərakəndə və topdan satışını həyata keçirən lider satış şəbəkəsidir. Bazarda 15 ildir qazandığımız təcrübə, müştərilərimizə yüksək xidmət, individual yanaşma, həmçinin keyfiyyətli məhsul seçimnin edilməsində bizi peşəkar mövqeyə gətirir. Bizimlə əməkdaşlığın üstünlükləri
          </p>

          <ol className="list-decimal pl-6 space-y-3 text-[16px]">
            <li>
              Sərfəli qiymətə telefon aksesuarları, ehtiyat hissələri və kiçik məişət texnikalarının satışı;
            </li>
            <li>
              Təqdim olunan məhsullara istənilən ad və loqonun lazer ilə yazılması;
            </li>
            <li>
              Əməkdaşlıq zamanı marketinq dəstəyinin verilməsi;
            </li>
            <li>
              Korporativ müştərilərə uyğun ödəniş sistemi.
            </li>
          </ol>

          <p className="pt-2">
            Əlavə məlumat üçün {" "}
            <a href="tel:+994512015501" className="font-medium underline decoration-dotted underline-offset-4 hover:decoration-solid">
              +994 51 201-55-01
            </a>{" "}
            nömrəmiz ilə əlaqə saxlaya və ya {" "}
            <a
              href="mailto:corporate.sale@superfon.az"
              className="font-medium text-[#0070DC] underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              corporate.sale@superfon.az
            </a>{" "}
            elektron mail ünvanımıza yaza bilərsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Corpative