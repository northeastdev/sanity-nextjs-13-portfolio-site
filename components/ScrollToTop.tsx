"use client";

export default function ScrollToTop() {
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="flex gap-2 dark:text-white-primary">
          <p className="dark:text-white-primary opacity-60 hover:scale-110 transition-transform ease-out">
            ⬆️ Back To Top
          </p>
        </div>
      </button>
    </>
  );
}
