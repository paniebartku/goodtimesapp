export const removeItem = (itemElement, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemElement,
      id,
    },
  };
};

export const addItem = (itemElement, itemContent) => {
  const getId = () => Math.floor(Math.random() * 1000000000000000 + 1);
  return {
    type: 'ADD_ITEM',
    payload: {
      itemElement,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
