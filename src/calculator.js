class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n(.*)/);
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
    const negatives = numbers.split(delimiter).filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numbers
      .split(delimiter)
      .reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;
