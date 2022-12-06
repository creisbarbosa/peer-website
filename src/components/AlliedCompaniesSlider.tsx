import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import Endeavor from "../assets/logos/endeavor.svg";
import Abdi from "../assets/logos/abdi.svg";
import Liga from "../assets/logos/liga_ventures.svg";
import Grob from "../assets/logos/grob.svg";
import Abimaq from "../assets/logos/abimaq.svg";
import Fiemg from "../assets/logos/fiemg.svg";
import Ahk from "../assets/logos/ahk.svg";
import Hundred from "../assets/logos/100.svg";

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
      <a className="keen-slider__slide number-slide1" >Nossos aliados →</a>
      <a className="keen-slider__slide number-slide2" href="https://endeavor.org.br/scaleup/" target="blank"><Image src={ Endeavor } alt="" /></a>
      <a className="keen-slider__slide number-slide3" href="https://www.startupindustria.com.br/" target="blank"><Image src={ Abdi } alt="" /></a>
      <a className="keen-slider__slide number-slide4" href="https://liga.ventures/" target="blank"><Image src={ Liga } alt="" /></a>
      <a className="keen-slider__slide number-slide5" href="https://www.grobgroup.com/pt/" target="blank"><Image src={ Grob } alt="" /></a>
      <a className="keen-slider__slide number-slide6" href="https://www.abimaq.org." target="blank"><Image src={ Abimaq } alt="" /></a>
      <a className="keen-slider__slide number-slide7" href="https://fiemglab.com.br/aceleracaofiemglab40/" target="blank"><Image src={ Fiemg } alt="" /></a>
      <a className="keen-slider__slide number-slide8" href="https://startupsconnected.com.br/" target="blank"><Image src={ Ahk } alt="" /></a>
      <a className="keen-slider__slide number-slide9" href="https://www.openstartups.net/site/ranking/index.html" target="blank"><Image src={ Hundred } alt="" /></a>
    </SliderContainer>
  )
}