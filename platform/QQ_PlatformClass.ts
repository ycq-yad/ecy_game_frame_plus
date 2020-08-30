/** QQ相关接口实现类 */
declare class QQ_PlatformClass extends WX_PlatformClass {
    /**创建盒子广告 */
    createAppBox(id: string): any;

    /**创建积木广告 */
    createBlockAD(): any;
}