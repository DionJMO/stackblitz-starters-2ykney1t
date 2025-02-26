const popoverContent = `
# Animation Controls

This animation demonstrates a logo moving across the screen. You can:

1. Click anywhere to start/stop the animation
2. Use the input fields to set a new position
3. Toggle between vertical and diagonal movement
4. Press any key to advance one frame

The logo will reset its position when it moves off-screen.
`;

document.addEventListener("DOMContentLoaded", (event) => {
  const popoverTrigger = document.getElementById("popoverBtn");
  if (popoverTrigger) {
    const popover = new bootstrap.Popover(popoverTrigger, {
      trigger: "click",
      content: marked.parse(popoverContent),
      html: true,
      title: "Animation Instructions",
    });
  }
});