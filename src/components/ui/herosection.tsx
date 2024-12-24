import * as React from "react"

const HeroSection = () =>{
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <div className="absolute inset-0 bg-[url('/ooorganize.svg')] bg-cover bg-center opacity-100 z-[-1]">
                <div
                    className="absolute inset-0 bg-[url('/ssspill.svg')]  bg-cover bg-center opacity-20 z-[0]">

                </div>
            </div>

            <h1 className="bg-gradient-to-r from-[#DD65B3] to-[#FF914F] text-transparent  bg-clip-text text-4xl sm:text-6xl lg:text-7xl p-[30px] text-center  tracking-wide">
                Hızlı, Akıllı ve Kişiselleştirilmiş Formlar Tasarlayın!
            </h1>
            <p className="mt-100 p-[50px] text-lg text-center text-neutral-500 max-w-6xl">
                Formify ile dakikalar içinde profesyonel, şık ve tamamen ihtiyacınıza özel formlar oluşturun!
                Yapay zeka desteği sayesinde sadece birkaç tıklamayla akıllı öneriler alın, düzenlemeleri kolayca
                yapın ve formunuzu paylaşmaya hazır hale getirin. Zaman kaybetmeden veri toplayın, analiz edin ve
                işinizi bir sonraki seviyeye taşıyın! Şimdi başlayın, form oluşturmanın en kolay yolunu keşfedin!
            </p>

        </div>
    )
}
export default HeroSection;
