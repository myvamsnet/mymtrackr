import { DiscountAndDeliveryFeeType } from "@/zustand/invoiceAndReceiptStore";
import toast from "react-hot-toast";
export const calculateTotal = (items: ItemType[]) => {
  const value = items.reduce((acc, item) => {
    const quantity = parseFloat(item?.quantity) || 0;
    const price = parseFloat(item?.price) || 0;
    return acc + quantity * price;
  }, 0);
  return value;
};

export const calculateGrandTotal = (
  items: ItemType[],
  discount: string,
  deliveryFee: string
) => {
  const subtotal = calculateTotal(items); // Calculate subtotal
  const discountValue = parseFloat(String(discount)) || 0; // Discount value
  const deliveryFeeValue = parseFloat(String(deliveryFee)) || 0; // Delivery fee

  const grandTotal = subtotal - discountValue + deliveryFeeValue;

  return grandTotal;
};
interface ItemType {
  quantity: string;
  price: string;
}
