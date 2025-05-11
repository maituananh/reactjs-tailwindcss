import { BookDetail } from "../../types/BookDetail";

function ItemDescription({ item }: { item: BookDetail }) {
  return (
    <div className="pt-4 pb-4 space-y-3">
      <p className="font-bold text-xl">Mô tả sản phẩm</p>
      <p className="font-medium text-md">{item?.subtitle}</p>
      <p className="text-sm">{item?.desc}</p>
    </div>
  );
}

export default ItemDescription;
