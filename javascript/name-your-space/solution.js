// https://www.codewars.com/kata/514b6c44a337752e67000077

const namespace = (root, path, value) => (
  path = path instanceof Array ? path : path.split(/\./),
  key = path.shift(),
  root = root || {},
  value
    // Create object
    ? (
      path.length
      ? root[key] = namespace({}, path, value)
      : root[key] = value,
      root
    )
    // Traverse object
    : path.length
      ? namespace(root[key], path)
      : root[key]
);

