// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Urmi",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        babies: ['👶', '🍼', '🤰', '👨‍👩‍👧‍👦']        // Baby and family emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't just love you, I admire you! 💕"     // Secret hover message
        },
        second: {
            text: "How much do you love me?", // For the love meter
            startText: "Forever yours!",                                // Text before the percentage
            nextBtn: "Next 💕"                                          // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",  // Question 3
            yesBtn: "100% YES",                                       // Text for "Yes" button
            noBtn: "Nahhhhh"                                                  // Text for "No" button
        },
        fourth: {
            text: "How excited are you about meeting our baby in July? 👶",
            yesBtn: "So excited!",
            noBtn: "No"
        },
        fifth: {
            text: "Are you ready for this beautiful journey together? ❤️🤰👶",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OUR LOVE IS INFINITE! 🚀💕👶✨",        // Shows when they go past 5000%
        high: "Our family is going to be perfect! 👨‍👩‍👧‍👦💕",  // Shows when they go past 1000%
        normal: "I can't wait to be parents with you! 🥰"              // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You're the love of my life, and now we're creating a new one! 💕👶🎉",
        message: "I promise to love you and our baby with all my heart. Happy Valentine's Day, my everything! 💑💕",
        emojis: "💕👶🤰👨‍👩‍👧‍👦🎁❤️💖💝🍼💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#8B1538",      // Gradient start (deep wine red)
        backgroundEnd: "#F5D5E0",        // Gradient end (light soft pink)
        buttonBackground: "#C71956",     // Button color (vibrant wine pink)
        buttonHover: "#E63384",          // Button hover color (brighter pink)
        textColor: "#6B0A2C"             // Text color (deep wine for readability)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dfhjxevsg/video/upload/v1770302455/Do_Dil_Mil_Rahe_Hain_Magar_Chupke_Chupke_%E0%A4%A6_%E0%A4%A6%E0%A4%B2_%E0%A4%AE%E0%A4%B2_%E0%A4%B0%E0%A4%B9_%E0%A4%B9_Kumar_Sanu_Shahrukh_Khan_Pardes_bb9gff.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
