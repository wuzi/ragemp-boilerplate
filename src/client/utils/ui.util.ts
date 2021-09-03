/**
 * Example: https://puu.sh/kf0BU/264da46568.jpg
 * Docs: https://gtaforums.com/topic/820813-displaying-help-text/
 * @param {string} message
 */
const sendHelpMessage = (message: string): void => {
  mp.game.ui.setTextComponentFormat('STRING');
  mp.game.ui.addTextComponentSubstringPlayerName(message);
  mp.game.ui.displayHelpTextFromStringLabel(0, false, true, -1);
};

/**
 * Draw a message on screen (must be used on render)
 * @param {string} message - The message to be drawn
 */
const drawSubtitleTimed = (message: string): void => {
  mp.game.ui.setTextFont(7);
  mp.game.ui.setTextEntry2('STRING');
  mp.game.ui.addTextComponentSubstringPlayerName(message);
  mp.game.ui.drawSubtitleTimed(1, true);
};

export { sendHelpMessage, drawSubtitleTimed };
