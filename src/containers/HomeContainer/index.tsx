import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/future/image'

import { useKeenSlider } from 'keen-slider/react'

import { Arrow } from '../../components/Arrow'
import { HomeContainerProps } from './types'
import * as S from './styles'

import 'keen-slider/keen-slider.min.css'

export function HomeContainer(props: HomeContainerProps) {
  const { data } = props
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 1,
    slides: { perView: 2, spacing: 32, origin: 'center' },
    mode: 'snap',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  if (!data) return null

  return (
    <>
      <S.NavSlider>
        <S.Container ref={sliderRef} className="keen-slider">
          {data.map(({ id, title, price, imageUrl }) => (
            <Link key={id} href={`/product/${id}`} passHref>
              <S.Product className="keen-slider__slide">
                <Image src={imageUrl} alt="" width={520} height={480} />
                <S.Footer>
                  <S.Title>{title}</S.Title>
                  <S.Price>{price}</S.Price>
                </S.Footer>
              </S.Product>
            </Link>
          ))}
        </S.Container>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </S.NavSlider>
      {loaded && instanceRef.current && (
        <S.Dots>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
            ></button>
          ))}
        </S.Dots>
      )}
    </>
  )
}
