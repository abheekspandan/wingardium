Approach:

Designed a modular React app with components like ImageGrid and Modal.
Dynamic State Management:Leveraged React's useState to manage images (images), the loading status (loading), and the currently selected image (selectedImage).
API Integration: Used axios to fetch 21 random dog images from the Dog CEO API and stored them in the images state.
Dynamic Modal Rendering: When an image is clicked, its URL is stored in the selectedImage state. This triggers the conditional rendering of the Modal component, allowing users to preview the selected image.
Used useState hooks to track background colors and modal interactions.

Challenges Faced:

Dynamic Rendering of Components: Ensuring that the modal opened and closed correctly required proper state handling (selectedImage), including resetting the state on closure to prevent stale data.
API Data Fetching: Handling API errors gracefully was crucial, especially since the Dog CEO API might fail or return unexpected results. A catch block ensures users are notified during failures.
Faced issues with synchronizing modal color picker and grid updates. Resolved this by passing state-updating functions as props.


deployed app link:- wingardium-git-main-abheekspandans-projects.vercel.app


