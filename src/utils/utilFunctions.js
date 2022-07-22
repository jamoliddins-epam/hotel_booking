export function getToday() {
  var date = new Date()

  var month = date.getMonth() + 1
  var day = date.getDate()
  var year = date.getFullYear()

  if (month < 10) month = '0' + month.toString()
  if (day < 10) day = '0' + day.toString()

  return year + '-' + month + '-' + day
}
