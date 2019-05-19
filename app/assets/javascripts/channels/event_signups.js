//= require cable
//= require_self

document.addEventListener("DOMContentLoaded", function() {
  const leaderboardElement = document.querySelector("[data-role='leaderboard']")

  if (!leaderboardElement) return

  App.cable.subscriptions.create("EventSignupsChannel", {
    received: function(data) {
      updateLeaderboardItem(data)
    }
  })
})

function updateLeaderboardItem(data) {
  console.log(data)
  
  const element = document.querySelector(`[data-leaderboard-item="${ data.profile_uid }"]`)
  const valueElement = element.querySelector(`[data-role="leaderboard-total-value"]`)

  valueElement.innerHTML = data.data_value
}