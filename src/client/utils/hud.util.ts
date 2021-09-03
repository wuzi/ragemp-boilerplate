const hiddenHudElements: number[] = [];

/**
 * Hide HUD elements.
 *
 * @param {number[]} elements - Elements to be hidden (https://wiki.rage.mp/index.php?title=HUD_Components)
 */
export function hideHudElements(elements: number[]): void {
  for (const element of elements) {
    if (hiddenHudElements.indexOf(element) === -1) hiddenHudElements.push(element);
  }
}

/**
 * Shows or hide common HUD elements (cursor, chat, radar...) to interact with CEF UI
 * @param toggle - Enable/Disable CEF interaction mode
 */
export function toggleInteractModeCEF(toggle: boolean): void {
  mp.game.ui.displayRadar(!toggle);
  mp.gui.chat.show(!toggle);
  mp.gui.chat.activate(!toggle);
  mp.gui.cursor.visible = toggle;
}

/**
 * Hide HUD elements every tick
 */
mp.events.add('render', (): void => {
  for (const element of hiddenHudElements) {
    mp.game.ui.hideHudComponentThisFrame(element);
  }
});
