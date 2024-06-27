import React, { useState, useEffect } from 'react'
import './BoardContent.scss'
import Column from '../Column/Column'
import { initData } from '../../actions/initData';
import _ from 'lodash'
import { mapOrder } from '../../utilities/sort';

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
      const boardInitData = initData.boards.find(board => board.boardId === "board-1")
      if(boardInitData){
        setBoard(boardInitData)

        //sort columns
        // boardInitData.columns.sort((a,b)=>
        //     boardInitData.columnOrder.indexOf(a.id) - boardInitData.columnOrder.indexOf(b.id)
        // )
        setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, "id"))
      }
    }, [])

    if(_.isEmpty(board)){
        return(
            <>
                <div className='not-found'>No Board Found</div>
            </>
        )
    }
    
    return (
        <>
            <div className="board-columns">
                {columns && columns.length > 0 && columns.map((column,index)=>{
                    return(
                        <Column 
                            key= {column.id}
                            column = {column}
                        />
                    )                    
                })}
            </div>
        </>
    )
}

export default BoardContent