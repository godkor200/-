let Range = function (start, end, step) {
  isNaN(start) ? null : (this.start = start);
  if (!isNaN(end)) {
    this.end = end;
  }

  this.step = step || 1;
};

Range.prototype.size = function () {
  return this.end
    ? Math.round(this.end / this.step)
    : Math.round(this.start / this.step);
};

Range.prototype.each = function (callback) {
  if (this.start < this.end) {
    for (let i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else if (this.start > this.end) {
    if (this.step < 0) {
      for (let i = this.start; i >= this.end; i += this.step) {
        callback(i);
      }
    } else {
      for (let i = this.start; i >= this.end; i -= this.step) {
        callback(i);
      }
    }
  }
};

Range.prototype.includes = function (val) {
  if (isNaN(this.end)) {
    return this.start === val;
  } else if (!isNaN(this.end) && val < this.end) {
    return val % this.step === 0;
  }
  return false;
};

let range = new Range(1);
