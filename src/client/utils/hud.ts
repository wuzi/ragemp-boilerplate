const hiddenHudElements: number[] = [];

/**
 * Hide HUD elements.
 *
 * @param {number[]} elements - Elements to be hidden (https://wiki.rage.mp/index.php?title=HUD_Components)
 */
const hideHudElements = (elements: number[]): void => {
  for (const element of elements) {
    if (hiddenHudElements.indexOf(element) === -1) hiddenHudElements.push(element);
  }
};

/**
 * Hide HUD elements every tick
 */
mp.events.add('render', (): void => {
  for (const element of hiddenHudElements) {
    mp.game.ui.hideHudComponentThisFrame(element);
  }
});

export { hideHudElements };
