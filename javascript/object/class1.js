class Release {
  constructor(name = "Generic", value = 0) {
    (this.name = name), (this.value = value);
  }
}

class FinalcialCycle {
  constructor(month, year) {
    this.releases = [];
    this.year = year;
    this.month = month;
  }

  addReleases(...releases) {
    releases.forEach((l) => this.releases.push(l));
  }

  sumary() {
    let consolidatedValue = 0;
    this.releases.forEach((l) => {
      consolidatedValue += l.value;
    });
    return consolidatedValue;
  }
}

const salary = new Release("Salário", 45000);
const electricityBill = new Release("Light", -220);

const accounts = new FinalcialCycle(6, 2018);
accounts.addReleases(salary, electricityBill);
console.log(accounts.sumary());
