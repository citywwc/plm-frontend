const local = window.localStorage;
const json = JSON;
const disable = local === undefined || json === undefined;

const put = (key, data) => {
  if (disable) {
    return;
  }

  try {
    local[key] = json.stringify(data);
  } catch (err) {
    // null
  }
};

const get = (key) => {
  if (disable) {
    return undefined;
  }

  try {
    let jsonstr = local[key];
    return json.parse(jsonstr);
  } catch (err) {
    return undefined;
  }
};

const remove = (key) => {
  if (disable) {
    return;
  }

  try {
    local.removeItem(key);
  } catch (err) {
    // null
  }
};

const clear = () => {
  if (disable) {
    return;
  }

  local.clear();
};

export {put, get, remove, clear};
