import { request } from "./request";

export function getDetail(id) {
  return request({
    url: "/detail",
    params: {
      id
    }
  });
}

export function getRecommends() {
  return request({
    url: "/recommend"
  });
}

export class Goods {
  constructor(colums, itemInfo) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.services = itemInfo.serveices;
    this.colums = colums;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.table;
  }
}
