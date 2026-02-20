/**
 * @fileoverview 运行时启动参数工具
 */

/**
 * 是否启用低配提速模式
 *
 * 启用条件（任一满足）：
 * - 启动参数包含 -turbo
 * - 配置中 browser.turbo = true
 *
 * @param {object} [config] - 全局配置（可选）
 * @returns {boolean}
 */
export function isTurboModeEnabled(config) {
    return process.argv.includes('-turbo') || config?.browser?.turbo === true;
}
