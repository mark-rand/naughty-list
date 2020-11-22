import React from "react"

const ChristmasCountdown = () => {
  const countdownMonth = 12 - 1 // zero based months
  const countdownDay = 25
  var now = new Date()
  if (countdownDay === now.getDate() && countdownMonth === now.getMonth()) {
    return <>Happy Christmas!</>
  }
  var targetYear = now.getFullYear()
  if (countdownMonth <= now.getMonth()) {
    if (countdownMonth === now.getMonth()) {
      if (countdownDay <= now.getDate()) {
        targetYear++
      }
    } else {
      targetYear++
    }
  }
  const targetDate = new Date(targetYear, countdownMonth, countdownDay)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const daysUntilChristmas = Math.round((targetDate-today)/(1000*60*60*24))
  return (
    <>
      <span>Only {daysUntilChristmas} day{daysUntilChristmas > 1 ? "s" : null} until Christmas!!!! Be kind.</span>
    </>
  )
}

export default ChristmasCountdown
