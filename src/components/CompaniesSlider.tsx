import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import Nestle from "../assets/logos/nestle_logo.svg";
import Scania from "../assets/logos/scania_logo.svg";
import Votorantim from "../assets/logos/votorantim_logo.svg";
import Eaton from "../assets/logos/eaton_logo.svg";
import Weg from "../assets/logos/weg_logo.svg";
import Voith from "../assets/logos/voith_logo.svg";
import Maxion from "../assets/logos/maxion_logo.svg";
import Gobain from "../assets/logos/gobain_logo.svg";

import { SliderContainer } from "../styles/components/CompaniesSlider";

import "keen-slider/keen-slider.min.css";

export default function CompanyIcon() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 7,
      spacing: 24,
    },
  })

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      <a className="keen-slider__slide number-slide1" >Empresas que<br/> confiam em nosso<br/> trabalho →</a>
      <a className="keen-slider__slide number-slide2" href="https://www.nestle.com.br/" target="blank"><Image src={ Nestle } alt="" /></a>
      <a className="keen-slider__slide number-slide3" href="https://www.scania.com/br/pt/home.html" target="blank"><Image src={ Scania } alt="" /></a>
      <a className="keen-slider__slide number-slide4" href="https://www.votorantimcimentos.com.br/" target="blank"><Image src={ Votorantim } alt="" /></a>
      <a className="keen-slider__slide number-slide5" href="https://www.eaton.com/br/" target="blank"><Image src={ Eaton } alt="" /></a>
      <a className="keen-slider__slide number-slide6" href="https://www.weg.net/institutional/BR/pt/" target="blank"><Image src={ Weg } alt="" /></a>
      <a className="keen-slider__slide number-slide7" href="https://voith.com/corp-en/about-us/markets-locations/brazil-pt.html" target="blank"><Image src={ Voith } alt="" /></a>
      <a className="keen-slider__slide number-slide8" href="https://www.maxionwheels.com/" target="blank"><Image src={ Maxion } alt="" /></a>
      <a className="keen-slider__slide number-slide9" href="https://www.saint-gobain.com.br/" target="blank"><Image src={ Gobain } alt="" /></a>
    </SliderContainer>
  )
}