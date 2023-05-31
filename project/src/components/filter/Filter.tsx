import tw from "tailwind-styled-components";
import total from '../../assets/filter/total.png'
import smartphone from '../../assets/filter/smartphone.png'
import laptop from '../../assets/filter/laptop.png'
import automotive from '../../assets/filter/automotive.png'
import motocycle from '../../assets/filter/motorcycle.png'

export default function Filter() {
  return (
    <FilterContainer>
      <FilterTab>
        <FilterImg src={total}/>
        <FilterText>전체</FilterText>
      </FilterTab>

      <FilterTab>
        <FilterImg src={smartphone}/>
        <FilterText>스마트폰</FilterText>
      </FilterTab>

      <FilterTab>
        <FilterImg src={laptop}/>
        <FilterText>노트북</FilterText>
      </FilterTab>

      <FilterTab>
      <FilterImg src={automotive}/>
      <FilterText>자동차</FilterText>
      </FilterTab>

      <FilterTab>
      <FilterImg src={motocycle}/>
      <FilterText>오토바이</FilterText>
      </FilterTab>

    </FilterContainer>
  )
}

// tailwind
const FilterContainer = tw.ul`
  w-100vw;
  flex
  h-43;
  gap-5
  my-5
  justify-center
`

const FilterTab = tw.li`
  flex-col
  text-center
`

const FilterImg = tw.img`
  w-16
  h-16
  border
  rounded-full
  p-2
  hover:bg-indigo-300
  cursor-pointer
`

const FilterText = tw.span`
  text-sm
  font-semibold
`