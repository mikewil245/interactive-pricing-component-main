document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const price = document.querySelector(".pricing");
  const pageViews = document.querySelector(".flex-group h3");
  const toggle = document.querySelector(".billing-toggle-checkbox");
  const monthOrYear = document.querySelector(".month-to-year");

  const monthlySliderValues = [8, 12, 16, 24, 36];
  const pageViewsArray = ["10K", "50K", "100K", "500K", "1M"];

  // Calculate yearly prices with a 25% discount
  const yearlySliderValues = monthlySliderValues.map(
    (value) => value * 12 * 0.75
  );

  const updatePrice = () => {
    const index = slider.value;
    const isYearly = toggle.checked;

    // Determine the price based on the toggle state
    const value = isYearly
      ? yearlySliderValues[index]
      : monthlySliderValues[index];

    // Update the price display
    price.innerHTML = `$${value}.00`;

    // Update the billing period display
    monthOrYear.innerHTML = isYearly ? "/ year" : "/ month";

    // Update the page views display
    pageViews.innerHTML = `${pageViewsArray[index]} PAGEVIEWS`;

    // Update the slider background gradient
    // Divide by 4 to normalize the index (0-4) to a range between 0 and 1
    // Multiply by 100 to convert the normalized value to a percentage (0% to 100%)
    slider.style.background = `linear-gradient(to right, #10d5c2 ${
      (index / 4) * 100
    }%, #ECF0FB ${(index / 4) * 100}%)`;
  };

  // Add event listeners
  slider.addEventListener("input", updatePrice);
  toggle.addEventListener("change", updatePrice);

  // Initialize the display
  updatePrice();
});
