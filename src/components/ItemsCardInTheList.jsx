import { useSelector } from "react-redux";
import { randomImage } from "../calculations/randomImage";

export function ItemsCardInTheList({ product, price, brand, index, page }) {
  const downloaderStore = useSelector(state => state.downloaderReducer);
  const imageSrc = downloaderStore === 'fulfilled' ? randomImage(product, index, downloaderStore, page) : "https://media2.giphy.com/media/26BGr0rhc3GJq0C9W/giphy.webp?cid=ecf05e47v4bf79mc4gfa4e7hrwy2cn35i8dzw1336y8oahmt&ep=v1_gifs_search&rid=giphy.webp&ct=g";
  const numbFmt = new Intl.NumberFormat('ru-RU').format(price) + '.00';

  return (
    <div className="items-card-in-the-list">
      <div className="image_wrap">
        <img src={imageSrc} alt="jewelry" width="95%" />
      </div>
      {product &&
        <div className="product-wrap">
          <p title={product}>{product.length > 33 ? product.slice(0, 32) + "..." : product}</p>
        </div>}
      {price &&
        <p className="price-value">{numbFmt} ₽</p>}
      {brand &&
        <span className="brand">{brand}</span>}
    </div>
  )
}
