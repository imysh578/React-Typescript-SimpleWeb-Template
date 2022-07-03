import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../../recoil/todoList'
import { StatContent, Stats } from './styled'

const TodoListStats = () => {
  const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} = useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Stats>
      <StatContent>Total items: {totalNum}</StatContent>
      <StatContent>Items completed: {totalCompletedNum}</StatContent>
      <StatContent>Items no completed: {totalUncompletedNum}</StatContent>
      <StatContent>Percent completed: {formattedPercentCompleted}</StatContent>
    </Stats>
  )
}

export default TodoListStats