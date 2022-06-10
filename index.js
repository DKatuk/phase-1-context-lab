/* Your Code Here */

function createEmployeeRecord(arr)
{
return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents:[],
    timeOutEvents:[],
}

}
const createEmployeeRecords = function(ArrayOfArrays) {
    return ArrayOfArrays.map(function(array){
        return createEmployeeRecord(array)
    })
}
function createTimeInEvent(Datastamp)
{
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(Datastamp.slice(-4)),
        date: Datastamp.slice(0, 10)
})
return this
}
function createTimeOutEvent(Datastamp)
{
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(Datastamp.slice(-4)),
        date: Datastamp.slice(0, 10)
})
return this
}
function hoursWorkedOnDate(DataForm)
{
    let InTime = this.timeInEvents.find(function(e){
        return e.date === DataForm
    })

    let OutTime = this.timeOutEvents.find(function(e){
        return e.date === DataForm
    })

    return (OutTime.hour - InTime.hour) / 100
}

function wagesEarnedOnDate(DataForm)
{
    const Payowed = hoursWorkedOnDate(this, DataForm)* this.payPerHour
    return parseFloat(Payowed.toString())
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}
function calculatePayroll (arrayofObject)
{
    let sum=0;
    for (let i=0;i<arrayofObject.length;i++) {
        sum += allWagesFor.call(arrayofObject[i]);
      }
    return sum
}

function findEmployeeByFirstName(Array, firstName) {
    return Array.find((Person) => Person.firstName === firstName )
  }

  function wagesEarnedOnDate(date = "all") {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
  }

