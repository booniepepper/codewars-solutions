// https://www.codewars.com/kata/515bb423de843ea99400000a

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.itemsPerPage = itemsPerPage;
  this.pages = [];
  this.totalItemCount = collection.length;
  for (var i = 0; i < this.totalItemCount; i++) {
    var pageIndex = Math.floor(i / this.itemsPerPage);
    var indexInPage = i % this.itemsPerPage;
    if (!this.pages[pageIndex]) {
      this.pages[pageIndex] = [];
    }
    this.pages[pageIndex][indexInPage] = collection[i];
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.totalItemCount;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.pages.length
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (!this.pages[pageIndex]) {
    return -1;
  }
  return this.pages[pageIndex].length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || this.itemCount() <= itemIndex) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
}

