

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                
                serif: ['var(--font-lora)', 'serif'],
                
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                'rainforest-green': '#047857', 
                'volcanic-amber': '#f59e0b',  
                'cloud-gray': '#f8fafc',      
                'deep-gray': '#1f2937',       
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            if (targetElement) {
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
