// Factory for node containing data, right/left children
const node = (data, right, left) => {
  return {
    data: data || null,
    rightChildren: right || null,
    leftChildren: left || null,
  };
};
