export const progress = function(completed) {
  if (completed > 100) {
    clearTimeout(this.timer);
    return;
  } else {
    this.setState({ completed }, () => {});
    this.timer = setTimeout(() => this.progress((completed += 1)), 10);
  }
};

export const clearProgress = function() {
  clearTimeout(this.timer);
  this.progress(0);
};
