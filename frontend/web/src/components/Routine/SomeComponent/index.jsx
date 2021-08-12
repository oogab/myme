import React from 'react'
import {useDrag, useDrop} from 'react-dnd'


const ITEM_TYPE = 'SOME_COMPONENT'

export default function SomeComponent({ index, move }) {  
    const [{ isDragging }, drag] = useDrag({
      // monitor.getItem() 의 내용으로 들어갈 값을 정의합니다.
      // type 값은 무조건 설정되어 있어야 합니다. (useDrop의 accept와 일치시켜야 함)
      item: { type: ITEM_TYPE, index },
  
      // Return array의 첫번째 값에 들어갈 객체를 정의합니다.
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
  
      // 드래그가 완전히 끝났을때 실행됩니다. 보통 여기에서 Redux dispatch를 많이 실행시킵니다.
      end: (item) => {
        console.log(`${index} should move to ${item.index}`)
      },
    })
  
    const [, drop] = useDrop({
      accept: ITEM_TYPE,
      hover: (item) => {
        if (item.index === index) {
          return null
        }
  
        move(item.index, index)
  
        item.index = index // item is mutable
      },
    })
  
    return (
      <div ref={node => drag(drop(node))}>hello</div>
    )
  }