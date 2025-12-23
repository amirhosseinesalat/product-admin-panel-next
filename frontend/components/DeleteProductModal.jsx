import styles from "./DeleteProductModal.module.css";
import Image from "next/image";
function DeleteProductModal({ onClose, onConfirm, product }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.iconWrapper}>
          <Image
            src="/images/Close.png"
            width={500}
            height={500}
            alt="Picture of the close"
          />
        </div>

        <p className={styles.title}>آیا از حذف {product.name} محصول مطمئنید؟</p>

        <div className={styles.actions}>
          <button className={styles.deleteBtn} onClick={onConfirm}>
            حذف
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;
