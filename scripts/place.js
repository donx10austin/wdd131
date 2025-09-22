body {
    margin: 0;
    padding: 0;
    background-color: #ffffff; /* White background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; /* Hides any overflow to prevent scrollbars */
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-shape {
    position: absolute;
    bottom: 0; /* Aligns to the bottom of the container */
    left: 50%;
    transform: translateX(-50%); /* Centers the shape horizontally */
    width: 80vw;
    height: 80vh;
    background-color: #000000; /* Black color */
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
}

.secondary-shape {
    position: absolute;
    top: 10%; /* Positions it above the main shape */
    left: 10%;
    width: 40vw;
    height: 60vh;
    background-color: #000000; /* Black color */
    border-top-left-radius: 70% 70%;
    border-top-right-radius: 70% 70%;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    transform: rotate(20deg); /* Rotates to match the wireframe's angle */
}
