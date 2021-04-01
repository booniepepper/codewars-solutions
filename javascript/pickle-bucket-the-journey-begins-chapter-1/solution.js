// https://www.codewars.com/kata/5ce5df8dcb83dc0020d2bd8f

const FLAVORS = 4;

function getAverages (pickleCounts) {
  if (!pickleCounts || !pickleCounts instanceof Array) {
    throw(`Expected an array as input. Instead got: ${pickleCounts}\n`
          + "This exception should only be thrown if test cases are added with"
          + "null or non-array edge cases. These are NOT required to be handled.");
  }
  while (pickleCounts.length % FLAVORS || pickleCounts.length == 0) {
    pickleCounts.push(0);
  }
  const groupCount = pickleCounts.length / FLAVORS;
  return pickleCounts.reduce(bucketize, []).map(p => p / groupCount);
}

function bucketize(bucket, pickleCount, index) {
  let i = index % FLAVORS;
  bucket[i] = pickleCount + (bucket[i] || 0);
  return bucket;
}

