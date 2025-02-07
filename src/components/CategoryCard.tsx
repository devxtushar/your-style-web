function CategoryCard() {
  return (
    <div className="relative category_card">
      <div>
        <img
          src="https://your-style.vercel.app/imgfiles/women-fashion-free-img.jpg"
          alt="category image"
          className="category_card__img"
        />
      </div>
      <div className="inside_img flex flex-col gap-5">
        <h2>Upto 20% Off On Tank Tops</h2>
        <h3>
          Elevate your wardrobe with fashionable deals, ensuring you shine
          without breaking the bank.
        </h3>
        <div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
