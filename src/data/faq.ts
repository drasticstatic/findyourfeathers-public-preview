/**
 * FAQ data for Find Your Feathers LLC — Rev. Heather L. Randolph's
 * metaphysical & Reiki practice in West Seneca / Buffalo, NY.
 *
 * Content sourced from the crawled site at firecrawls/fyf-site
 * (services.md, who-we-are.md, homepage.md). Answers are grounded in
 * Heather's own published copy — no medical claims, no iamoneself / ACIM /
 * retreat content. Educational prototype, not the official
 * findyourfeathers.org. Heather reviews all content.
 *
 * Typed shape mirrors the iamoneself FAQ data module so the page can reuse
 * the same accordion + search pattern.
 */

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  description?: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: "About Heather & Find Your Feathers",
    description:
      "Who stewards this practice, where it lives, and the spirit it's offered in.",
    items: [
      {
        id: "fyf-who-is-heather",
        question: "Who is Heather?",
        answer:
          "Rev. Heather L. Randolph is an exceptionally trained lifelong student of the psychic arts, with an extensive background in healthcare. Her certifications span life coaching, conscious vocal channeling, and Global Reiki Master-Teacher. Her work centers mental-health advocacy, addiction-recovery coaching, and personal empowerment.",
      },
      {
        id: "fyf-what-is-fyf",
        question: "What is Find Your Feathers?",
        answer:
          "Find Your Feathers LLC is a metaphysical and Reiki services practice serving West Seneca, Buffalo, and the surrounding Western New York area. It exists to help you remember the true essence of who you are meant to be — to find your feathers, and discover your wings.",
      },
      {
        id: "fyf-heather-philosophy",
        question: "What's Heather's guiding philosophy?",
        answer:
          "“It is safe to look within, you are beautiful. Within is where you find the echoes of the true essence of who you are meant to be.” — Rev. Heather L. Randolph",
      },
      {
        id: "fyf-where-located",
        question: "Where are you located?",
        answer:
          "Heather serves West Seneca, Buffalo, and the surrounding Western New York region. Healing sessions are offered in the comfort of your own home. The official practice lives at <a href='https://www.findyourfeathers.org' target='_blank' rel='noopener noreferrer'>findyourfeathers.org</a>.",
      },
      {
        id: "fyf-licensed",
        question: "Are you licensed health professionals?",
        answer:
          "No. Reiki and the metaphysical services described here are offered for educational, relaxation, and spiritual purposes only. They are not medical advice, diagnosis, or treatment, and they are not a substitute for qualified healthcare. Always consult a licensed provider for medical decisions.",
      },
    ],
  },
  {
    category: "What Is Reiki?",
    description:
      "The gentle energetic practice at the heart of every session.",
    items: [
      {
        id: "fyf-what-is-reiki",
        question: "What is Reiki?",
        answer:
          "Reiki is a holistic healing practice that promotes relaxation and well-being by channeling Universal Life Force energy. That energy is directed through the Reiki Master Practitioner to help balance and restore your energy systems.",
      },
      {
        id: "fyf-what-are-ka",
        question: "What are the energy centers you work with?",
        answer:
          "Reiki works with your energy centers, or Ka, to help balance and restore the flow of Universal Life Force energy through your system.",
      },
      {
        id: "fyf-is-reiki-safe",
        question: "Is Reiki safe?",
        answer:
          "Yes. As Heather puts it, <strong>“Reiki energy cannot harm!!!”</strong> It is gentle and supportive by nature. While it complements wellbeing, it is not a replacement for medical care.",
      },
      {
        id: "fyf-do-i-need-to-believe",
        question: "Do I need to believe in Reiki for it to work?",
        answer:
          "No belief is required. Reiki meets you where you are. Many clients arrive simply curious or seeking relaxation, and find the experience restorative regardless of their prior beliefs.",
      },
      {
        id: "fyf-distance-reiki-summary",
        question: "Can Reiki be sent across a distance?",
        answer:
          "Yes. Distance Reiki channels the same Universal Life Force energy without you needing to be in the room. See the Distance Reiki section below for how it works.",
      },
    ],
  },
  {
    category: "Sessions & What to Expect",
    description: "How a session flows, and how to arrive ready.",
    items: [
      {
        id: "fyf-where-sessions",
        question: "Where do sessions take place?",
        answer:
          "Sessions are available in the comfort of your home. Heather comes to you across the Western New York area, and distance sessions are available wherever you are.",
      },
      {
        id: "fyf-how-long",
        question: "How long is a session?",
        answer:
          "Session length depends on the service you choose. Most run about an hour; the Standing Bowl Healing & Alignment is 30 minutes, and the Healing Power of Colors session is 1.5 hours. See Services for the specifics.",
      },
      {
        id: "fyf-how-to-prepare",
        question: "How should I prepare for a session?",
        answer:
          "Come as you are. Wear comfortable clothing, choose a quiet space where you can relax, and bring an open mind. There's nothing you need to study or bring — just a willingness to receive.",
      },
      {
        id: "fyf-what-happens",
        question: "What happens during a Reiki session?",
        answer:
          "Heather channels Universal Life Force energy through her hands to your energy centers, or Ka, helping balance and restore your system. Sessions are gentle, quiet, and supportive — you rest comfortably while the energy moves.",
      },
      {
        id: "fyf-how-will-i-feel",
        question: "How will I feel afterward?",
        answer:
          "Most people leave a session feeling more relaxed and balanced. Reiki promotes a sense of well-being; everyone's experience is their own, and effects can unfold gently over the hours that follow.",
      },
    ],
  },
  {
    category: "Services & Modalities",
    description: "The full menu of offerings, with times and starting prices.",
    items: [
      {
        id: "fyf-services-overview",
        question: "What services do you offer?",
        answer:
          "Nine core services, plus several specialized modalities: Foundational Reiki, Crystal Energy Healing, Reiki and Resonance, Reiki Training & Teacher Pathway, Healing Power of Colors, Disentanglement Session, Standing Bowl Healing & Alignment, Soul Coaching Oracle Reading, and Build Your Spiritual Toolkit.",
      },
      {
        id: "fyf-foundational-reiki",
        question: "Foundational Reiki",
        answer:
          "A one-hour Reiki session channeling Universal Life Force energy to balance and restore your system. <strong>1 hr · $65</strong>",
      },
      {
        id: "fyf-crystal-energy",
        question: "Crystal Energy Healing",
        answer:
          "A one-hour session working with crystals alongside energy work. <strong>1 hr · $125</strong>",
      },
      {
        id: "fyf-reiki-and-resonance",
        question: "Reiki and Resonance",
        answer:
          "A one-hour combined session pairing Reiki with resonance work. <strong>1 hr · $135</strong>",
      },
      {
        id: "fyf-reiki-training",
        question: "Reiki Training & Teacher Pathway",
        answer:
          "For those called to practice or teach Reiki themselves. Pricing varies; sessions start at <strong>$100</strong>.",
      },
      {
        id: "fyf-healing-colors",
        question: "Healing Power of Colors",
        answer:
          "A 1.5-hour session working with color energy. <strong>1.5 hr · from $75</strong>",
      },
      {
        id: "fyf-disentanglement",
        question: "Disentanglement Session",
        answer:
          "A one-hour session to help release energetic entanglements. <strong>1 hr · from $75</strong>",
      },
      {
        id: "fyf-standing-bowl",
        question: "Standing Bowl Healing & Alignment",
        answer:
          "A focused 30-minute sound-and-energy alignment session. <strong>30 min · $50</strong>",
      },
      {
        id: "fyf-soul-coaching-oracle",
        question: "Soul Coaching Oracle Reading",
        answer:
          "A one-hour oracle reading for soul-level guidance. <strong>1 hr · from $70</strong>",
      },
      {
        id: "fyf-spiritual-toolkit",
        question: "Build Your Spiritual Toolkit",
        answer:
          "A one-hour session to help you assemble your own spiritual practices and tools. <strong>1 hr · from $55</strong>",
      },
      {
        id: "fyf-other-modalities",
        question: "Do you offer any other modalities?",
        answer:
          "Yes. Additional offerings include Substance Over-Use Recovery Coaching, Quantum Disentanglement Sessions, Spiritual & Ethical Coaching, Guided Cord Cutting, Tarot & Oracle Card Readings, and Clairvoyant Channeling. Mediumship readings are offered by request and depend on reader availability.",
      },
    ],
  },
  {
    category: "Distance Reiki & Remote Sessions",
    description: "Healing energy that reaches you wherever you are.",
    items: [
      {
        id: "fyf-how-distance-works",
        question: "How does distance Reiki work?",
        answer:
          "Heather describes it like this: <strong>“Imagine the act of skipping a stone across water; the emanating ripples represent the healing energy that eventually returns to you on the shore.”</strong> Universal Life Force energy isn't bound by distance — it moves to you the way ripples move across water.",
      },
      {
        id: "fyf-what-to-do-during-distance",
        question: "What should I do during a distance session?",
        answer:
          "Find a quiet, comfortable place to rest. You might lie down or sit comfortably. There's nothing you need to do — simply remain open and receptive. Many people feel relaxed or subtly energized; others simply rest.",
      },
      {
        id: "fyf-can-distance-reach-me",
        question: "Can distance Reiki really reach me?",
        answer:
          "Yes. Because Reiki channels Universal Life Force energy rather than physical touch, distance is not a barrier. Clients across regions receive sessions this way; the skipping-stone imagery is a fair picture of how the energy travels.",
      },
    ],
  },
  {
    category: "Booking, Pricing & Location",
    description: "How to take the next step.",
    items: [
      {
        id: "fyf-how-to-book",
        question: "How do I book a session?",
        answer:
          "Booking and the full service menu live on the official practice site at <a href='https://www.findyourfeathers.org' target='_blank' rel='noopener noreferrer'>findyourfeathers.org</a>. You can also reach Heather directly at <a href='mailto:Heather@findyourfeathers.org'>Heather@findyourfeathers.org</a>.",
      },
      {
        id: "fyf-where-serve",
        question: "What areas do you serve?",
        answer:
          "West Seneca, Buffalo, and the surrounding Western New York region for in-home sessions. Distance sessions are available regardless of location.",
      },
      {
        id: "fyf-pricing",
        question: "How much do sessions cost?",
        answer:
          "Single sessions range from $50 (Standing Bowl, 30 min) up to $135 (Reiki and Resonance, 1 hr). Many sessions start at $55–$75. See the Services section above for each offering's time and starting price, or view live availability at <a href='https://www.findyourfeathers.org' target='_blank' rel='noopener noreferrer'>findyourfeathers.org</a>.",
      },
      {
        id: "fyf-gift-cards",
        question: "Do you offer gift cards?",
        answer:
          "Yes — gift cards are available through the official practice site at <a href='https://www.findyourfeathers.org' target='_blank' rel='noopener noreferrer'>findyourfeathers.org</a>, along with testimonials and a blog.",
      },
      {
        id: "fyf-contact",
        question: "How do I contact Heather?",
        answer:
          "Email <a href='mailto:Heather@findyourfeathers.org'>Heather@findyourfeathers.org</a>, or use the contact page on <a href='https://www.findyourfeathers.org/contact' target='_blank' rel='noopener noreferrer'>findyourfeathers.org</a>.",
      },
    ],
  },
];
