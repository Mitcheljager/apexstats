document.addEventListener("turbolinks:load", function() {
  const elements = document.querySelectorAll("[data-action='item-more-data']")

  elements.forEach((element) => element.removeEventListener("click", expandItem))
  elements.forEach((element) => element.addEventListener("click", expandItem))
})

function expandItem() {
  event.preventDefault()

  const parentElement = this.closest(".item")
  parentElement.classList.toggle("item--more-data")

  this.classList.toggle("button--primary")
  if (this.innerHTML == "More data") {
    this.innerHTML = "Less data"
  } else {
    this.innerHTML = "More data"
  }
}
