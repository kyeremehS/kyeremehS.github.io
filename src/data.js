// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "samuel kyeremeh",
  tagline: "research engineer, ml practitioner, builder",
  email: "affum3331@gmail.com",
  bio: "building products, designing, scaling and learning.",
  currentWork: "stealth",
};

export const socialLinks = {
  github: "https://github.com/kyeremehS",
  linkedin: "https://www.linkedin.com/in/samuelkyeremeh/",
  twitter: "https://twitter.com/samuelkyeremeh",
};

export const stints = [
  {
    role: "research engineer",
    company: "@gigsama",
    url: "https://gigsama.com",
    description: "applied ml research",
  },
  {
    role: "campus lead",
    company: "@techstripped africa",
    url: "https://techstripped.com/",
    description: "leading tech education initiatives in ghana",
  },
  {
    role: "data science trainee",
    company: "@ghana tech lab",
    url: "https://www.ghanatechlab.com/",
    description: "apprenticeship program",
  },
  {
    role: "data analyst intern",
    company: "@npontu technologies",
    url: "https://npontu.com/",
    description: "data analysis and insights",
  },
];

export const research = [
  {
    title: "Applied machine learning for real-world problem solving",
    collaborator: "Dr. Example Name",
    url: "#",
  },
  {
    title: "Data-driven decision making and analytics",
    collaborator: "Dr. Another Name",
    url: "#",
    prefix: "faculty - ",
  },
  {
    title: "Machine learning model development and deployment",
    collaborator: "example@university.edu",
    url: "mailto:example@university.edu",
    prefix: "",
  },
];

export const skills = [
  {
    category: "programming languages",
    items: "Python, Typescript, SQL",
  },
  {
    category: "frameworks & tools",
    items:
      "PyTorch, Sklearn, Machine Learning, Pandas, Seaborn, Matplotlib, Numpy, Jupyter Notebooks, Git, TRL, Unsloth, Hugging Face",
  },
  {
    category: "data analytics",
    items:
      "Data Visualization, Data Integrity, Data Presentation, Data Analysis, Data Collection, Data Aggregation, Power BI, Microsoft Excel",
  },
];

export const projects = [
  {
    name: "End-to-End Text Summarization Pipeline",
    url: "https://github.com/kyeremehS/end-to-end-text-summarization",
    description:
      "Built text summarization models using Hugging Face Transformers and PyTorch. Conducted feature engineering with NLTK and spaCy. Deployed on AWS (Lambda & EC2) with Hugging Face Inference API.",
  },
  {
    name: "LLM Fine-tuning with TRL & Unsloth",
    url: "https://github.com/kyeremehS/finetuning-snippet",
    description:
      "Fine-tuned large language models using TRL and Unsloth for efficient training. Applied techniques like LoRA and QLoRA for parameter-efficient fine-tuning.",
  },
  {
    name: "911 Call Data Analysis and Visualization",
    url: "https://github.com/kyeremehS/911-Calls-Project",
    description:
      "Analyzed 911 call data to uncover emergency response insights. Cleaned data with Pandas and created visualizations with Matplotlib and Seaborn for stakeholder decision-making.",
  },
  {
    name: "Urban Mart Food Inventory Analysis",
    url: "#",
    description:
      "Built comprehensive Power BI dashboards for inventory analysis. Used PowerQuery for data preprocessing and DAX for calculated columns and measures.",
  },
];

export const blog = [
  {
    title: "Introduction to Machine Learning",
    url: "#",
  },
  {
    title: "Data Engineering Best Practices",
    url: "#",
  },
  {
    title: "Building Scalable ML Systems",
    url: "#",
  },
];

export const education = {
  institution: "Kwame Nkrumah University of Science and Technology",
  url: "https://knust.edu.gh",
  degree: "Bachelor of Science - Computer Science",
  period: "Jan 2022 - Sep 2025, Kumasi",
};

// Timeline/Journey data - Focus on KEY MILESTONES (not detailed job descriptions)
// This complements Stints by showing the broader career progression
export const timeline = [
  {
    year: "2025",
    title: "Transitioned to ML Research",
    organization: "",
    description:
      "Shifted focus to applied machine learning research and production systems",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Started Leading Tech Communities",
    organization: "",
    description:
      "Began organizing and leading tech education initiatives across Ghana",
    type: "leadership",
  },
  {
    year: "2023",
    title: "Completed Data Science Training",
    organization: "Ghana Tech Lab",
    description:
      "Graduated from intensive apprenticeship program, solidifying data science foundations",
    type: "achievement",
  },
  {
    year: "2022",
    title: "First Tech Role & University",
    organization: "",
    description:
      "Started CS degree at KNUST and landed first data analyst internship",
    type: "education",
  },
];

// Resume/CV configuration
export const resume = {
  fileName: "Samuel_Kyeremeh_Resume.pdf",
  // You can use a direct link to your resume hosted on Google Drive, Dropbox, or your own server
  // For Google Drive: Use the format "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
  url: "/resume.pdf", // Place your resume.pdf in the public folder
  lastUpdated: "2025",
};

// Contact form configuration
export const contactConfig = {
  // Option 1: Use Formspree (free tier available) - Replace with your form ID
  formspreeId: "YOUR_FORMSPREE_ID", // Get one at https://formspree.io
  // Option 2: Use EmailJS - Replace with your credentials
  // emailjsServiceId: "YOUR_SERVICE_ID",
  // emailjsTemplateId: "YOUR_TEMPLATE_ID",
  // emailjsPublicKey: "YOUR_PUBLIC_KEY",
  successMessage: "Thanks for reaching out! I'll get back to you soon.",
  errorMessage:
    "Oops! Something went wrong. Please try again or email me directly.",
};
