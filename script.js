document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    const { clientX: mouseX, clientY: mouseY } = event;

    eyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between mouse and eye center
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(eyeRect.width / 4, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 4);

        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
    });
});
