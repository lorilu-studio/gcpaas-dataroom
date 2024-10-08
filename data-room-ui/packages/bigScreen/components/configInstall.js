// 根据组件的type来返回组件的默认的完整的配置信息
function getDeclarationByType (type) {
  switch (type) {
    case 'texts':
      return import(/* webpackChunkName: "textsConfig" */ '@gcpaas/data-room-ui/packages/components/texts/bigScreenDefinition.js')
    case 'BaseLine':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseLine/bigScreenDefinition.js')
    case 'BaseBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseBar/bigScreenDefinition.js')
    case 'GroupBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/GroupBar/bigScreenDefinition.js')
    case 'BaseArea':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseArea/bigScreenDefinition.js')
    case 'BasePie':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BasePie/bigScreenDefinition.js')
    case 'BaseRadar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseRadar/bigScreenDefinition.js')
    case 'BasePoint':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BasePoint/bigScreenDefinition.js')
    case 'BaseGrid':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseGrid/bigScreenDefinition.js')
    case 'BaseColumn':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseColumn/bigScreenDefinition.js')
    case 'SingleColorColumn':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/SingleColorColumn/bigScreenDefinition.js')

    case 'container':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/container/bigScreenDefinition.js')
    case 'picture':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/media/picture/bigScreenDefinition.js')
    case 'BaseMap':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/map/BaseMap/bigScreenDefinition.js')
    case 'BaseTable':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/tables/BaseTable/bigScreenDefinition.js')
    case 'Buttons':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/controls/buttons/bigScreenDefinition.js')
    case 'inputs':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/controls/inputs/bigScreenDefinition.js')
    case 'WordCloud':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/rests/WordCloud/bigScreenDefinition.js')
    case 'Heatmap':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/rests/Heatmap/bigScreenDefinition.js')
    case 'StackBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/StackBar/bigScreenDefinition.js')
    case 'RoundBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/RoundBar/bigScreenDefinition.js')
    case 'StackColumn':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/StackColumn/bigScreenDefinition.js')
    case 'GroupColumn':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/GroupColumn/bigScreenDefinition')
    case 'MultiLine':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/MultiLine/bigScreenDefinition')
    case 'RaceLine':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/RaceLine/bigScreenDefinition')
    case 'QuarterPie':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/QuarterPie/bigScreenDefinition')
    case 'InteractivePie':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/InteractivePie/bigScreenDefinition')
    case 'BaseDonut':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseDonut/bigScreenDefinition')
    case 'CardDonut':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/CardDonut/bigScreenDefinition')
    case 'BaseRose':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseRose/bigScreenDefinition')
    case 'StackArea':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/StackArea/bigScreenDefinition')
    case 'PercentArea':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/PercentArea/bigScreenDefinition')
    case 'BaseYuJue':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseYuJue/bigScreenDefinition')
    case 'StackYuJue':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/StackYuJue/bigScreenDefinition')
    case 'GroupRadar':
      return import(/* webpackChunkName: "BaseLineConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/GroupRadar/bigScreenDefinition')
  }
}

export function getDeclaration (type) {
  return new Promise((resolve, reject) => {
    getDeclarationByType(type)
      .then((configModule) => {
        resolve(configModule.default())
      })
      .catch((error) => {
        reject(error)
      })
  })
}
