import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setTab } from "../../modules/filterSlice";
import { CategoryName } from "../../types/categories";
import Categories from "../../types/categories";

// png
import total from '../../assets/filter/total.png'
import smartphone from '../../assets/filter/smartphone.png'
import laptop from '../../assets/filter/laptop.png'
import automotive from '../../assets/filter/automotive.png'
import motocycle from '../../assets/filter/motorcycle.png'


export default function Filter() {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filterList.category);
  const tabHandler = (category: CategoryName)=>{
    dispatch(setTab(category));
  }

  return (
    <FilterContainer>
      <FilterTab>
        <FilterImg isChecked={category === Categories.total} src={total} onClick={()=>tabHandler(Categories.total)}/>
        <FilterText>전체</FilterText>
      </FilterTab>

      <FilterTab>
        <FilterImg isChecked={category === Categories.smartphones} src={smartphone} onClick={()=>tabHandler(Categories.smartphones)}/>
        <FilterText>스마트폰</FilterText>
      </FilterTab>

      <FilterTab>
        <FilterImg isChecked={category === Categories.laptops} src={laptop} onClick={()=>tabHandler(Categories.laptops)}/>
        <FilterText>노트북</FilterText>
      </FilterTab>

      <FilterTab>
      <FilterImg isChecked={category === Categories.automotive} src={automotive} onClick={()=>tabHandler(Categories.automotive)}/>
      <FilterText>자동차</FilterText>
      </FilterTab>

      <FilterTab>
      <FilterImg isChecked={category === Categories.motorcycle} src={motocycle} onClick={()=>tabHandler(Categories.motorcycle)}/>
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
  my-10
  justify-center
`

const FilterTab = tw.li`
  flex-col
  text-center
`

interface FilterImgProps {
  isChecked : boolean;
}

const FilterImg = tw.img<FilterImgProps>`
  w-16
  h-16
  border
  rounded-full
  p-2
  ${(props) => props.isChecked && 'bg-indigo-300'}
  hover:bg-indigo-300
  cursor-pointer
`

const FilterText = tw.span`
  text-sm
  font-semibold
`