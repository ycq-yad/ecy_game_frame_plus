export class GEvent {
    /**体力值变更了*/
    public static O_PS_CG: string = "ON_PS_CG";

    /**金币值变更了 */
    public static O_G_CG: string = "O_G_CG";

    /**体力倒计时更新的事件 */
    public static O_SP_UD_T = "O_SP_UD_T";

    /** 刷新邀请奖励列表 */
    public static RF_IV: string = "RF_IV";

    /**飞金币的事件 */
    public static E_F_GD: string = "E_F_GD";

    /**切换录制的图片 */
    public static C_V_IMG: string = "C_V_IMG";
}
window['GEvent'] = GEvent;