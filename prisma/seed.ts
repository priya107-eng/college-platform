import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
  name: "Anna University",
  location: "Chennai",
  rating: 4.3,
  fees: "₹80,000",
  placements: "85%",
  image:"/images/anna.jpeg",
  description:
    "Popular state university with strong engineering programs.",
  courses: [
    "CSE",
    "IT",
    "EEE",
    "Mechanical",
  ],
},
{
  name: "SRM University",
  location: "Chennai",
  rating: 4.2,
  fees: "₹2,20,000",
  placements: "88%",
  image:"/images/srm.jpeg",
  description:
    "Private university with strong placement opportunities.",
  courses: [
    "CSE",
    "AI",
    "ECE",
  ],
},
{
  name: "PSG College of Technology",
  location: "Coimbatore",
  rating: 4.5,
  fees: "₹1,10,000",
  placements: "90%",
  image:"/images/psg.jpeg",
  description:
    "Top engineering college in Tamil Nadu.",
  courses: [
    "CSE",
    "EEE",
    "Civil",
  ],
},
{
  name: "SASTRA University",
  location: "Thanjavur",
  rating: 4.1,
  fees: "₹1,70,000",
  placements: "84%",
  image:"/images/sastra.jpeg",
  description:
    "Well known private deemed university.",
  courses: [
    "CSE",
    "Biotech",
    "Mechanical",
  ],
},
{
  name: "Amrita University",
  location: "Coimbatore",
  rating: 4.4,
  fees: "₹2,10,000",
  placements: "91%",
  image:"/images/amrita.jpeg",
  description:
    "Research-focused private university.",
  courses: [
    "CSE",
    "ECE",
    "Cyber Security",
  ],
},

      {
        name: "IIT Madras",
        location: "Chennai",
        rating: 4.8,
        fees: "₹2,00,000",
        placements: "95%",
        image:"/images/iit.jpeg",
        description:
          "Top engineering institute with excellent placements.",
        courses: [
          "CSE",
          "ECE",
          "Mechanical",
          "Civil",
        ],
      },

      {
        name: "NIT Trichy",
        location: "Trichy",
        rating: 4.6,
        fees: "₹1,80,000",
        placements: "92%",
        image:"/images/nit.jpeg",
        description:
          "Premier NIT known for academics and placements.",
        courses: [
          "CSE",
          "EEE",
          "ICE",
          "Mechanical",
        ],
      },

      {
        name: "VIT Vellore",
        location: "Vellore",
        rating: 4.4,
        fees: "₹2,50,000",
        placements: "89%",
        image:"/images/vit.jpeg",
        description:
          "Private university with strong placement support.",
        courses: [
          "CSE",
          "AI",
          "Cyber Security",
        ],
      },
    ],
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });