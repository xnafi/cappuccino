export interface Topic {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const Topics: Topic[] = [
  {
    id: 1,
    name: "FULL TASTE",
    description:
      "Experience the richness of flavors in every sip. Our meticulously crafted blends are designed to provide a full-bodied taste that delights the palate and invigorates the senses.",
    image: "/assets/img1.jpg",
  },
  {
    id: 2,
    name: "FEEL THE COFFEE",
    description:
      "Feel the energy and aroma of freshly brewed coffee. Our premium beans are roasted to perfection, ensuring a vibrant and invigorating experience that awakens your senses.",
    image: "/assets/img2.jpg",
  },
  {
    id: 3,
    name: "BEAUTIFUL PLACE",
    description:
      "Relax in our beautiful and serene environment. Our cozy interiors and picturesque views provide the perfect backdrop for enjoying your favorite coffee or catching up with friends.",
    image: "/assets/img3.jpg",
  },
];
