export const config = {
  developer: {
    fullName: 'Gayatri Batta',
    name: 'Gayatri',
    title: 'AI Engineer',
    title2: 'ML Researcher',
    email: 'gayatribatta20@gmail.com',
    location: 'United States',
    github: 'https://github.com/Gayatri-Batta',
    linkedin: 'https://www.linkedin.com/in/gayatri-batta',
    resume: '/Gayatri_Batta_Resume.pdf',
    photo: '/images/gayatri-profile.png',
  },

  about: {
    title: "Building intelligent systems that bridge research and production.",
    description:
      "I recently graduated with an MS in Artificial Intelligence from Stony Brook University, where my research focused on long-horizon forecasting over irregular time series data. These days I'm on the engineering side, building LLM-powered applications and multi-agent systems that solve real problems and create meaningful impact.",
  },

  whatIDo: [
    {
      title: 'AI/ML Engineering',
      description: 'Designing and deploying intelligent systems from research prototype to production.',
      details: [
        'LLM fine-tuning with LoRA & QLoRA',
        'Multi-agent systems with AutoGen',
        'RAG pipelines & vector databases',
        'Probabilistic time-series forecasting',
      ],
      tools: ['PyTorch', 'LangChain', 'HuggingFace', 'MLflow'],
    },
    {
      title: 'Research & Forecasting',
      description: 'Applying rigorous statistical and deep learning methods to real-world clinical and financial data.',
      details: [
        'Sparse Variational Gaussian Processes',
        'HiPPO-based memory representations',
        'ARIMA & LSTM baselines',
        'Clinical time-series modeling',
      ],
      tools: ['PyTorch', 'SciPy', 'NumPy', 'Weights & Biases'],
    },
    {
      title: 'Cloud & MLOps',
      description: 'Building infrastructure that keeps models healthy in production.',
      details: [
        'AWS Lambda + S3 ETL pipelines',
        'Kubernetes & Docker orchestration',
        'Terraform & Ansible IaC',
        'Grafana monitoring dashboards',
      ],
      tools: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end development from model serving APIs to interactive frontends.',
      details: [
        'FastAPI & Flask REST APIs',
        'React & TypeScript frontends',
        'PostgreSQL & vector DB backends',
        'Streamlit ML demo apps',
      ],
      tools: ['FastAPI', 'React', 'PostgreSQL', 'Streamlit'],
    },
  ],

  experiences: [
    {
      position: 'Graduate Research Assistant',
      company: 'Stony Brook University · Dr. Petar M. Djuric',
      period: 'Jun 2025 - May 2026',
      description:
        'Applied Recurrent Memory Online Sparse Variational Gaussian Processes with HiPPO based memory to model long-term patient calcium index trajectories. Reduced prediction error by 20% compared to vanilla GP and LSTM baselines.',
    },
    {
      position: 'Graduate Research Assistant',
      company: 'Stony Brook University · Dr. Sima Mofakham',
      period: 'Nov 2024 - Jan 2025',
      description:
        'Processed high-dimensional MetaGloves sensor streams to extract movement patterns for motor function analysis. Built Tableau dashboards for clinical decision support in rehabilitation settings.',
    },
    {
      position: 'Cloud & Data Engineer',
      company: 'Trianz Holdings Private Limited',
      period: 'Aug 2023 - Aug 2024',
      description:
        'Built ARIMA workload forecasters reducing infrastructure costs by 22%. Automated ETL pipelines with Python, AWS Lambda, and S3. Reduced deployment errors 40% via version-controlled Ansible playbooks.',
    },
    {
      position: 'Software Development & Automation Intern',
      company: 'Trianz Holdings Private Limited',
      period: 'Jan 2023 - Jun 2023',
      description:
        'Shipped a FastAPI and PostgreSQL recommendation engine achieving sub-200ms response times. Built CI/CD pipelines across AWS, Azure, and GCP with automated testing, accelerating release cadence by 25%.',
    },
  ],

  projects: [
    {
      title: 'CodeGenAI',
      category: 'Multi-Agent AI',
      description:
        'AutoGen-based multi-agent system for code generation, QA, and automated execution, benchmarked against LeetCode Weekly Contest problems to reduce data contamination.',
      tech: ['AutoGen', 'Python', 'LLMs'],
      github: 'https://github.com/Gayatri-Batta/agentic-sdlc-simulation',
      demo: '',
      image: 'https://images.unsplash.com/photo-1746286720965-cccf57e56c68?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'Synthetic Fraud Data Generator',
      category: 'Data / ML',
      description:
        'Synthetic banking fraud dataset generator with a configurable schema builder, behavioral fraud modeling, and a built-in ML baseline for training and evaluation.',
      tech: ['Python', 'Scikit-learn', 'Streamlit'],
      github: 'https://github.com/Gayatri-Batta/financial-synthetic-data-generator',
      demo: 'https://github.com/Gayatri-Batta/financial-synthetic-data-generator/releases/tag/demo-video',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'Before You Fly',
      category: 'GenAI / Multimodal',
      description:
        'AI-powered baggage and customs checker. Travelers upload a photo or enter an item name to instantly learn carry-on rules, checked baggage policies, and customs regulations.',
      tech: ['GenAI', 'Vision', 'Python'],
      github: 'https://github.com/Gayatri-Batta/before-you-fly',
      demo: 'https://github.com/Gayatri-Batta/before-you-fly/releases/tag/demo',
      image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'Prompt Injection Eval',
      category: 'AI Security',
      description:
        'Configurable evaluation framework for testing how AI agents handle prompt injection attacks hidden in workplace data. Includes a results dashboard comparing models and defenses.',
      tech: ['Python', 'LLMs', 'Evaluation'],
      github: 'https://github.com/Gayatri-Batta/prompt-injection-eval-framework',
      demo: '',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'MedifyAI',
      category: 'Healthcare AI',
      description:
        'Health condition prediction chatbot built on Mistral-7B with LoRA fine-tuning, 4-bit quantization, and a Paged AdamW optimizer for GPU-efficient inference.',
      tech: ['LoRA', 'Mistral-7B', 'Fine-tuning'],
      github: 'https://github.com/Gayatri-Batta/medify-ai',
      demo: '',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'LLM SOAP Notes Generator',
      category: 'Healthcare AI',
      description:
        'LLM-powered tool that auto-generates structured SOAP clinical notes from patient conversations, reducing documentation time for healthcare providers and improving consistency across records.',
      tech: ['LLMs', 'Python', 'FastAPI', 'NLP'],
      github: 'https://github.com/Gayatri-Batta/llm-soap-notes-generator',
      demo: '',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'Diabetes Classification App',
      category: 'ML / Healthcare',
      description:
        'Machine learning classification app that predicts diabetes risk from clinical features such as glucose level, BMI, and age. Features an interactive UI for real-time inference and model explainability.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      github: 'https://github.com/Gayatri-Batta/diabetes-classification-app',
      demo: '',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'FoodSense AI',
      category: 'Computer Vision',
      description:
        'AI-powered food recognition and nutrition analysis app that identifies dishes from photos and returns detailed nutritional breakdowns, ingredient estimates, and dietary tags in real time.',
      tech: ['Computer Vision', 'Python', 'Deep Learning', 'FastAPI'],
      github: 'https://github.com/Gayatri-Batta/foodsense-ai',
      demo: '',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop',
    },
    {
      title: 'Framefinder',
      category: 'Computer Vision',
      description:
        'Semantic video frame retrieval tool that lets users search video content using natural language queries or reference images, returning the most visually and contextually relevant frames.',
      tech: ['OpenCV', 'Python', 'CLIP', 'Vector Search'],
      github: 'https://github.com/Gayatri-Batta/framefinder',
      demo: '',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80&auto=format&fit=crop',
    },
  ],

  techStack: [
    // Row 1 – 12
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://python.org' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', url: 'https://pytorch.org' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', url: 'https://tensorflow.org' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://typescriptlang.org' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://docker.com' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: 'https://postgresql.org' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', url: 'https://fastapi.tiangolo.com' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', url: 'https://kernel.org' },
    // Row 2 – 10
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', url: 'https://kubernetes.io' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', url: 'https://cloud.google.com' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', url: 'https://flask.palletsprojects.com' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', url: 'https://numpy.org' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', url: 'https://pandas.pydata.org' },
    { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', url: 'https://jupyter.org' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', url: 'https://terraform.io' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', url: 'https://ansible.com' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://mysql.com' },
    // Row 3 – 8
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', url: 'https://cppreference.com' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://java.com' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', url: 'https://gnu.org/software/bash' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', url: 'https://redis.io' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', url: 'https://figma.com' },
    // Row 4 – 6
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://mongodb.com' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', url: 'https://djangoproject.com' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', url: 'https://postman.com' },
    // Row 5 – 4
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', url: 'https://vitejs.dev' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', url: 'https://vercel.com' },
    { name: 'JIRA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', url: 'https://atlassian.com/jira' },
    // Row 6 – 2
    { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', url: 'https://opencv.org' },
    { name: 'Pytorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', url: 'https://pytorch.org' },
  ],
};
